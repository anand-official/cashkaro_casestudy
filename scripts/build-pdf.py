"""Build the 15-page companion brief. Requires reportlab and PyMuPDF.

Run from the repository root: python scripts/build-pdf.py
The website remains the canonical source and interactive experience.
This deliberately designed print edition mirrors its 15-section argument.
"""
from pathlib import Path
from io import BytesIO
import fitz
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'output/pdf/CashKaro_Visual_Brief.pdf'
OUT.parent.mkdir(parents=True, exist_ok=True)
FONT = Path('/usr/share/fonts/truetype/dejavu')
pdfmetrics.registerFont(TTFont('Brief', str(FONT / 'DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('BriefBold', str(FONT / 'DejaVuSans-Bold.ttf')))
pdfmetrics.registerFontFamily('Brief', normal='Brief', bold='BriefBold', italic='Brief', boldItalic='BriefBold')

W, H = 960, 540
BG, INK, MUTED = '#F8F7F2', '#1F302E', '#54615E'
BLUE, PALE, LINE, ORANGE = '#263A91', '#E7EBF6', '#D6DDD3', '#A95422'
GREEN, WHITE = '#E7EDDF', '#FFFFFF'
BASE = 'https://cashkaro-shortlist.vercel.app/'
c = canvas.Canvas(str(OUT), pagesize=(W,H), pageCompression=1, invariant=1)
c.setTitle('CashKaro Universal Shopping Skill | 15-page product brief')
c.setAuthor('Ujjawal Anand')
c.setSubject('Independent CashKaro APM assignment concept; problem, product decision and validation')
boxes = []

def rect(x,y,w,h,fill=WHITE,stroke=None,r=0):
    c.setFillColor(HexColor(fill))
    c.setStrokeColor(HexColor(stroke or fill))
    c.roundRect(x,H-y-h,w,h,r,stroke=int(bool(stroke)),fill=1)

def line(x,y,x2,y2,color=LINE,width=1):
    c.setStrokeColor(HexColor(color)); c.setLineWidth(width)
    c.line(x,H-y,x2,H-y2)

def p(text,x,y,w,size=14,color=INK,bold=False,leading=None,align=0):
    style=ParagraphStyle('p', fontName='BriefBold' if bold else 'Brief',fontSize=size,
        leading=leading or size*1.38,textColor=HexColor(color),alignment=align)
    para=Paragraph(text,style)
    _,height=para.wrap(w,1000)
    assert 0 <= x and x+w <= W and y+height <= H-12, (text,y,height)
    boxes.append((c.getPageNumber(),x,y,w,height,text))
    para.drawOn(c,x,H-y-height)
    return height

def label(text,x,y,w=800,color=MUTED):
    return p(text.upper(),x,y,min(w,918-x),9,color,True,12)

def link(text,x,y,url,size=10,color=BLUE):
    p(text,x,y,880-x,size,color)
    width=pdfmetrics.stringWidth(text,'Brief',size)
    c.linkURL(url,(x,H-y-size*1.6,x+width,H-y),relative=0,thickness=0)

def svg(name,x,y,w,h):
    # Render the existing vector artwork, without altering its content.
    d=fitz.open(str(ROOT/name)); pix=d[0].get_pixmap(matrix=fitz.Matrix(4,4),alpha=True)
    c.drawImage(ImageReader(BytesIO(pix.tobytes('png'))),x,H-y-h,w,h,mask='auto',preserveAspectRatio=True,anchor='c')

def page(n,section,title,subtitle=None):
    rect(0,0,W,H,BG)
    label(f'{n:02d} / {section}',42,29)
    part='PROBLEM' if n<8 else 'DECISION' if n==8 else 'SOLUTION'
    p(part,806,29,112,9,BLUE,True,align=2)
    p(title,42,65,858,28,INK,True,34)
    if subtitle: p(subtitle,42,149,866,13.5,MUTED)
    line(42,503,918,503)
    p('Ujjawal Anand  ·  CashKaro APM concept  ·  September 2026',42,514,710,8,MUTED)
    p(f'{n:02d} / 15',850,513,68,9,MUTED,align=2)
    c.bookmarkPage(f'page{n}')
    c.addOutlineEntry(f'{n:02d}  {section}',f'page{n}',level=0,closed=False)

def note(text,url=None):
    p(text,42,471,876,9,MUTED,leading=13)
    if url: c.linkURL(url,(42,H-497,918,H-470),relative=0,thickness=0)

def end(): c.showPage()

# 01: The cover is the first substantive page, not a sixteenth page.
page(1,'The mandate','More purchases through CashKaro.<br/>The same existing users.',
     'Existing users still make eligible purchases without CashKaro. This proposal addresses that original problem by testing a different point of entry.')
rect(42,219,876,114,BLUE,r=5)
label('The required outcome',65,237,240,'#DCE2FA')
p('Valid tracked orders',367,239,440,24,WHITE,True,align=1)
line(377,278,795,278,'#8593D0')
p('Existing users in the fixed cohort',367,289,440,14,WHITE,align=1)
p('per quarter',807,265,96,11,WHITE,align=1)
label('Proposed product',42,360)
p('CashKaro Universal Shopping Skill',42,383,600,23,INK,True)
p('Let an assistant hand a selected purchase to CashKaro for an eligible benefit and approved retailer route.',42,423,790,14)
link('Original assignment PDF',42,478,BASE+'source-material/cashkaro_assignment.pdf')
link('Open interactive prototype',284,478,BASE+'prototype')
end()

page(2,'Problem selection','Bypass has several causes.<br/>Access is the selected hypothesis.',
     'A reminder will not fix an excluded product, an insignificant reward or distrust in payment. The intervention must match the cause.')
for x,head,body in [(42,'Value','“The benefit is too small.”'),(340,'Trust','“Will I receive it?”'),(638,'Eligibility','“Does this purchase qualify?”')]:
    rect(x,218,280,84,WHITE,LINE,4); label(head,x+18,234,245); p(body,x+18,259,245,14,INK,True)
rect(42,320,876,86,GREEN,r=4)
label('Selected focus / recall + re-entry',62,338)
p('“I have decided. Do I need to start again?”',62,362,810,23,INK,True)
p('Focus where a meaningful benefit exists but inserting CashKaro adds effort. This is a hypothesis about lost orders, not a measured diagnosis of the entire user base.',42,428,876,13.5)
end()

page(3,'Purchase journey','The opportunity sits between<br/>decision and checkout.',
     'The shopper’s research may happen anywhere. CashKaro needs an actionable handoff, not another research destination.')
for i,(head,body) in enumerate([('Need','Set a budget'),('Research','Search · video · AI'),('“This is the one.”','Product + merchant chosen'),('Checkout','Retailer completes order')]):
    x=42+i*224; chosen=i==2
    rect(x,217,204,119,BLUE if chosen else WHITE,None if chosen else LINE,4)
    label(f'0{i+1}',x+15,232,160,'#DCE2FA' if chosen else MUTED)
    p(head,x+15,257,176,16,WHITE if chosen else INK,True)
    p(body,x+15,296,176,10.5,WHITE if chosen else MUTED)
    if i<3:p('→',x+206,260,18,15,MUTED)
label('Today’s extra task',42,363,210)
p('Remember CashKaro → re-enter → locate the route',274,358,640,15)
line(42,390,918,390)
label('Proposed handoff',42,413,210,BLUE)
p('Offer CashKaro here → preserve the selected purchase',274,408,640,15,BLUE,True)
note('Illustrative journey. Exact variant and an eligible pre-cart route are required; existing carts cannot be assumed recoverable.')
end()

page(4,'Evidence quality','There is evidence of friction.<br/>Its prevalence remains unknown.')
label('Available evidence',42,169)
p('1',42,194,95,79,BLUE,True,85)
p('inherited<br/>respondent',148,214,230,17,INK,True)
p('Retailer-app preference, switching reluctance, small rewards and uncertain payout confidence.',42,299,378,16)
p('The brief separately establishes bypass among existing users.',42,390,378,14,MUTED)
line(462,169,462,443)
label('Not established',500,169)
for i,t in enumerate(['Which cause explains most lost orders','CashKaro users’ AI-shopping overlap','Demand for this integration','Incremental order uplift']):
    p('○',500,206+i*39,22,13,MUTED);p(t,526,206+i*39,387,14)
rect(500,378,418,73,GREEN,r=3)
p('Next: reconstruct the last three purchases, including routine and non-AI journeys. Diagnose before pitching.',518,392,381,12.5)
note('Evidence ledger and limitations · No new interviews or internal telemetry claimed.',BASE+'research')
end()

page(5,'Why now','Assistants are becoming<br/>purchase-decision surfaces.')
rect(42,170,417,207,WHITE,LINE,4);label('Already distributed',62,190)
for x,y,t in [(62,224,'Google Search'),(251,224,'YouTube'),(62,276,'Retailer apps'),(251,276,'Social')]:
    rect(x,y,168,36,BG,r=4);p(t,x+8,y+9,152,12,align=1)
p('CashKaro does not own every starting point.',62,337,363,12.5,MUTED)
rect(481,170,437,207,PALE,r=4);label('Emerging compression',501,190)
p('Need<br/>Research<br/>Recommendation',501,224,242,22,INK,True,34)
line(758,228,758,323,BLUE,2)
p('One<br/>conversation',777,257,123,13,BLUE,True)
p('A purchase handoff becomes strategically valuable.',501,337,398,12.5,MUTED)
p('OpenAI’s product-discovery work and Google’s Universal Cart support investigating this shift. They do not establish Indian transaction share or reach within CashKaro. Google’s announced initial rollout is US-focused.',42,402,870,14)
link('OpenAI · 24 Mar 2026',42,478,'https://openai.com/index/powering-product-discovery-in-chatgpt/')
link('Google · 19 May 2026',320,478,'https://blog.google/products-and-platforms/products/shopping/google-shopping-cart/')
end()

page(6,'Why CashKaro','External purchase routing already<br/>has a company precedent.',
     'CashKaro’s 2025 Campus Partner listing describes creating cashback links through the Deals Anytime Telegram bot. The proposal extends an existing pattern.')
rect(42,218,356,225,WHITE,LINE,4);label('Documented precedent',63,237)
for i,t in enumerate(['Product link','Telegram bot','Cashback link']):
    p(t,70,270+i*57,300,19,BLUE,True,align=1)
    if i<2:p('↓',202,299+i*57,30,18,MUTED,align=1)
label('Capabilities to build on',447,225)
for i,t in enumerate(['Affiliate relationships','Benefit rules + attribution','Account identity + reward settlement']):
    p(t,447,258+i*38,470,16);line(447,286+i*38,918,286+i*38)
p('Extend the route. Do not rebuild discovery.',447,390,460,21,BLUE,True)
note('CashKaro Campus Partner listing (2025) · Precedent does not prove reusable APIs, current adoption, AI-host approval or incremental orders.',
     'https://unstop.com/internships/campus-partner-internship-cashkaro-1545241')
end()

page(7,'Segment and opportunity','Start with reachable users, then<br/>test the size of the opportunity.')
for i,t in enumerate(['Existing CashKaro transactor','Recent AI product research','Supported purchase ahead']):
    x=42+i*303;rect(x,165,269,62,WHITE,LINE,4);p(t,x+15,181,239,14,INK,True,align=1)
    if i<2:p('+',x+278,181,24,18,MUTED)
p('Estimate this segment through a sampled survey linked, with consent, to pre-period order data. The phone is an interaction example; category selection must consider repeat frequency, eligible coverage and benefit size together.',42,250,876,14)
line(42,331,918,331)
for x,value,caption in [(42,'10%','reachable cohort'),(345,'0.2','extra orders / reachable user'),(648,'0.02','extra orders / assigned user')]:
    p(value,x,351,270,43,BLUE if x==648 else INK,True,align=1)
    p(caption,x,414,270,11,MUTED,align=1)
p('×',319,376,30,20,MUTED);p('=',618,376,30,20,MUTED)
note('Illustrative assumptions, not forecast or observed uplift. Broad adoption statistics cannot supply this denominator.',BASE+'experiment#reach-model')
end()

page(8,'Direction selection','Retain the brief’s problem.<br/>Extend its routing directions.')
rows=[('Widget / quick access','Less entry effort; recall remains.','Not the lead'),
      ('Browser extension','Contextual assistance; browser reach is limited.','Build on principle'),
      ('Contextual reminders','Incomplete intent signals risk irrelevant prompts.','Not the lead'),
      ('Share / deep link','Preserves context; remembering to share remains.','Retain foundation'),
      ('Owned discovery agent','New research habits and costly product data.','Reject ownership')]
for i,(a,b,d) in enumerate(rows):
    y=162+i*41
    if i==3:rect(42,y,876,41,GREEN)
    p(a,54,y+11,224,11.5,INK,True);p(b,282,y+11,442,11.5,MUTED);p(d,748,y+11,158,10.5,BLUE,True)
    line(42,y+41,918,y+41)
rect(42,385,876,70,BLUE,r=3)
p('Recommend: Universal Shopping Skill',61,397,820,20,WHITE,True)
p('Potential recall reduction. Lower deployment control, uncertain reach and partner dependence.',61,429,820,12,'#E2E7FA')
note('Own-direction extension permitted by the brief. If contextual placement fails, Share may be the better first surface.',BASE+'research#alternatives')
end()

page(9,'Customer experience','The choice stays with the shopper.')
for x,w in [(42,255),(313,342),(671,247)]:rect(x,141,w,296,WHITE,LINE,5)
label('01 / Choose',61,158,216)
svg('assets/phones/aster.svg',61,184,214,168)
p('Aster 9',62,361,215,21,INK,True);p('“This is the one.”',62,397,215,13,MUTED)
label('02 / Check + consent',333,158,304)
svg('assets/cashkaro-logo.svg',334,189,120,30)
p('₹1,200',333,234,302,35,BLUE,True)
p('estimated Cashback',333,281,300,13,MUTED)
line(333,312,635,312)
p('Pay today',333,328,170,12);p('₹39,999',524,328,111,12,INK,True,align=2)
p('Potential benefit later',333,355,190,12);p('₹1,200',524,355,111,12,INK,True,align=2)
rect(333,392,302,28,BLUE,r=4);p('Continue with Cashback →',340,399,288,11,WHITE,True,align=1)
label('03 / Complete',690,158,209)
p('↗',690,214,180,44,BLUE)
p('Same product.<br/>Same retailer.',690,280,210,22,INK,True)
p('Checkout, payment and fulfillment remain with the retailer.',690,360,209,12.5,MUTED)
note('Fictional product and offer; no instant discount, live integration or transaction. Actual eligibility may differ substantially.')
link('Try the interactive prototype →',42,448,BASE+'prototype',12)
end()

page(10,'Product ownership','One routing capability.<br/>Different entry points.')
for i,t in enumerate(['ChatGPT','Claude','Gemini','Share']):
    x=42+i*222;rect(x,163,210,42,WHITE,LINE,4);p(t,x+10,174,190,14,INK,True,align=1)
p('Potential adapters. Each requires its own approval.',42,216,876,11,MUTED,align=1)
line(151,244,817,244,BLUE);line(151,237,151,244,BLUE);line(817,237,817,244,BLUE);line(480,244,480,261,BLUE)
rect(238,262,484,92,PALE,BLUE,5)
p('CashKaro Purchase Router',256,278,448,24,BLUE,True,align=1)
p('Identity · eligibility · benefit · consent',256,320,448,13,INK,align=1)
line(480,354,480,371,BLUE)
rect(278,372,404,37,GREEN,r=3);p('Approved route → retailer checkout',293,381,374,13,INK,True,align=1)
p('The assistant recommends. CashKaro checks and routes. The retailer sells.',42,432,876,15,INK,True,align=1)
note('MCP/API support guarantees neither contextual placement nor affiliate permission. No existing internal API or universal login assumed.',BASE+'experiment#architecture')
end()

page(11,'Scope and trust','A reliable handoff is the first release.',
     'One reviewed host and two approved merchant paths. Connect an account, check the selected purchase, explain conditions and obtain explicit consent.')
for i,(head,title,body) in enumerate([('Cashback','Conditional cash later','The retailer’s full price is payable today.'),('Rewards','Restricted redemption','Never presented as bank cash.'),('Unverified / ineligible','Continue directly','Preserve the choice; make no benefit claim.')]):
    x=42+i*298;rect(x,224,280,158,WHITE,r=4);line(x,224,x+280,224,ORANGE if i==2 else BLUE,3)
    label(head,x+18,243,245,ORANGE if i==2 else BLUE)
    p(title,x+18,277,244,19,INK,True)
    p(body,x+18,337,244,12.5,MUTED)
p('<b>Outside V1:</b> recommendation engine, retailer comparison, checkout, cart repair, scraping and coupon injection.',42,414,870,14)
note('The prototype includes small/zero benefits, cart warnings, stale policies, prior referrals and route failures.',BASE+'prototype')
end()

page(12,'Commercial assessment','More CashKaro orders do not prove<br/>more retailer sales.')
for x,head,title,body in [(42,'CashKaro incrementality','Did total valid tracked<br/>orders increase?','Measure across every CashKaro channel.'),(542,'Retailer incrementality','Did the retailer gain<br/>demand or conversion?','Requires retailer-level evidence.')]:
    line(x,168,x+376,168,LINE,2);label(head,x,186,375);p(title,x,222,375,23,INK,True);p(body,x,300,375,12.5,MUTED)
p('≠',449,223,62,52,ORANGE,align=1)
p('Early value may partly be attribution recapture with a visible user benefit. Consent does not override partner rules or justify silently replacing another referral.',42,344,870,14)
rect(42,411,876,42,GREEN,r=3)
p('<b>Route gates:</b> approved source · agreed attribution handling · sustainable retained commission',58,422,844,12)
note('Monitor reversals and support costs. Affiliate-industry risks and partner dependencies are addressed in the evidence ledger.',BASE+'research#attribution')
end()

page(13,'Causal experiment','Count everyone assigned,<br/>including the zeros.')
rect(151,161,658,39,WHITE,LINE,4);p('Freeze existing-user cohort → randomize by account',170,171,620,14,INK,True,align=1)
line(480,200,480,214);line(256,214,704,214);line(256,214,256,229);line(704,214,704,229)
for x,head,t,color in [(42,'Control','Current CashKaro experience',GREEN),(500,'Treatment','Skill access + onboarding',PALE)]:
    rect(x,229,418,71,color,r=4);label(head,x+18,241,382);p(t,x+18,264,382,16,INK,True)
rect(42,319,876,69,BLUE,r=4)
p('Difference in valid tracked orders',58,331,844,23,WHITE,True,align=1)
p('per originally assigned user · full quarter · all channels',58,365,844,12,WHITE,align=1)
p('Never connects ✓      Never invoked ✓      Declines ✓      No orders ✓',42,402,876,12,MUTED,align=1)
p('Intention to treat, with deduplication and a fixed backfill cutoff. AI-routed growth with flat total orders is channel displacement.',42,436,876,12.5)
note('Confirmed-order quality, tracking failures and contribution are companion measures. Full protocol linked here.',BASE+'experiment#protocol')
end()

page(14,'Validation and rollout','Fund learning before broad distribution.',
     'Recruit the predefined segment through CashKaro-owned invitations. Host-directory discovery is not a dependable launch plan.')
items=[('01 / Understand','Purchase research + usability','Is re-entry the problem? Is the benefit understood?'),('02 / Prove','One host + approved routes','Verify placement, context transfer, rules and attribution.'),('03 / Measure','Fixed-cohort experiment','Establish reach, power and contribution before scale.'),('04 / Expand','Additional hosts or Share','Only when preceding gates support investment.')]
for i,(a,b,d) in enumerate(items):
    x=42+(i%2)*458;y=214+(i//2)*128
    line(x,y,x+418,y,BLUE,2);label(a,x,y+15,412,BLUE);p(b,x,y+40,412,19,INK,True);p(d,x,y+76,404,13,MUTED)
note('Effort follows an integration assessment. Share remains a separate behavioural test; its success cannot validate the AI thesis.',BASE+'experiment#rollout')
end()

page(15,'Decision criteria','Proceed conditionally. Change direction<br/>when evidence requires it.')
items=[('Reach','Too few eligible purchase moments'),('Placement','Repeated recall erases the advantage'),('Permission','Partners reject the source or route'),('Reliability','Context, eligibility or attribution fails'),('User value','Benefits do not justify interruption'),('Incrementality','Orders only shift between channels'),('Economics','Contribution deteriorates'),('Competition','Hosts offer superior native incentives')]
for i,(a,b) in enumerate(items):
    x=42+(i%2)*446;y=164+(i//2)*49
    rect(x,y,430,46,WHITE,LINE,3);p(a,x+12,y+15,113,11,ORANGE,True);p(b,x+128,y+15,290,10.5)
p('The recommendation is a bounded validation investment. I would favour Share if it delivers comparable value with lower effort and better control.',42,380,876,15,INK,True)
for x,t,path in [(42,'Evidence','research'),(204,'Experiment','experiment'),(383,'AI decision trail','ai-transcript'),(595,'Compliance audit','compliance')]:
    link(t,x,442,BASE+path,11)
note('Complete contributing AI exports remain a submission requirement. This document does not claim platform or merchant approval.')
end()
c.save()

doc=fitz.open(OUT)
assert len(doc)==15
assert all(page.get_links() for page in doc if page.number not in [1,2])
print(f'{OUT.relative_to(ROOT)}: {len(doc)} pages, {OUT.stat().st_size:,} bytes')
