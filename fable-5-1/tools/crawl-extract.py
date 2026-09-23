import sys, re, html
from html.parser import HTMLParser

class P(HTMLParser):
    def __init__(self):
        super().__init__()
        self.out=[]; self.skip=0; self.stack=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag in ('script','style','noscript'): self.skip+=1; return
        if tag=='img': self.out.append(f"\n[IMG src={a.get('src')} alt={a.get('alt')} w={a.get('width')} h={a.get('height')}]")
        if tag=='a' and a.get('href'): self.out.append(f"[A href={a.get('href')}]")
        if tag in ('h1','h2','h3','h4','h5','h6'): self.out.append(f"\n\n<{tag}> ")
        if tag in ('p','li','dt','dd','tr','br','div','section','table','ul','dl','th','td','address','small'):
            self.out.append("\n" if tag not in ('th','td') else " | ")
        if tag in ('video','source','iframe'): self.out.append(f"\n[{tag.upper()} {a}]")
        if a.get('id'): self.out.append(f"{{#{a.get('id')}}}")
    def handle_endtag(self, tag):
        if tag in ('script','style','noscript'): self.skip-=1
        if tag in ('h1','h2','h3','h4','h5','h6'): self.out.append(f" </{tag}>\n")
    def handle_data(self, d):
        if self.skip: return
        d=re.sub(r'\s+',' ',d)
        if d.strip(): self.out.append(d)

for f in sys.argv[1:]:
    p=P(); p.feed(open(f,encoding='utf-8',errors='replace').read())
    t=''.join(p.out)
    t=re.sub(r'\n{3,}','\n\n',t)
    print(f"\n\n======== {f} ========\n{t}")
