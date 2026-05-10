
export default function Home(){
return(
<main>

<header style={{position:"fixed",top:"18px",left:0,width:"100%",zIndex:100,padding:"0 16px"}}>
<div className="glass" style={{maxWidth:"1280px",margin:"0 auto",borderRadius:"999px",padding:"14px 26px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",alignItems:"center",gap:"14px"}}>
<img src="/assets/logo.png" style={{width:"72px",height:"72px",objectFit:"contain"}}/>
<div>
<div style={{fontWeight:900,fontSize:"24px"}}>Ujjwala's Resin Art</div>
<div style={{fontSize:"11px",letterSpacing:".25em",textTransform:"uppercase",color:"#6d5a53"}}>Luxury Personalized Keepsakes</div>
</div>
</div>
<nav className="navlinks" style={{display:"flex",gap:"34px"}}>
<a href="#collections" style={{textDecoration:"none",color:"#231815"}}>Collections</a>
<a href="#instagram" style={{textDecoration:"none",color:"#231815"}}>Instagram</a>
<a href="#contact" style={{textDecoration:"none",color:"#231815"}}>Contact</a>
</nav>
</div>
</header>

<section style={{minHeight:"100vh",padding:"150px 24px 80px"}}>
<div className="hero-grid" style={{maxWidth:"1300px",margin:"0 auto",display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:"60px",alignItems:"center"}}>
<div>
<div className="glass" style={{display:"inline-block",padding:"12px 24px",borderRadius:"999px",marginBottom:"30px"}}>
Luxury Personalized Resin Keepsakes
</div>

<h1 style={{fontSize:"92px",lineHeight:".95",margin:"0 0 24px",fontWeight:900}}>
Preserve
<span className="grad">Beautiful</span>
Memories.
</h1>

<p style={{fontSize:"22px",lineHeight:"1.8",maxWidth:"620px",color:"#6d5a53"}}>
Premium handcrafted resin keepsakes designed for weddings, gifting, emotional memories and luxury artistic décor.
</p>

<div style={{display:"flex",gap:"18px",marginTop:"40px",flexWrap:"wrap"}}>
<a href="https://instagram.com/ujjwalaresinart" target="_blank" style={{textDecoration:"none"}}>
<button style={{padding:"18px 34px",borderRadius:"999px",background:"#22181A",color:"#fff",border:"none",fontWeight:700,cursor:"pointer"}}>
Visit Our Instagram
</button>
</a>
<a href="/customize" style={{textDecoration:"none"}}>
<button className="glass" style={{padding:"18px 34px",borderRadius:"999px",border:"none",fontWeight:700,cursor:"pointer"}}>
Start Custom Design
</button>
</a>
</div>
</div>

<div className="hero-images" style={{position:"relative",height:"760px"}}>
<img className="hover" src="/assets/hero-main.jpg" style={{position:"absolute",top:0,left:0,width:"360px",height:"470px",objectFit:"cover",borderRadius:"36px",boxShadow:"0 30px 80px rgba(0,0,0,.15)"}}/>
<img className="hover" src="/assets/hero-2.jpg" style={{position:"absolute",top:"120px",right:0,width:"300px",height:"360px",objectFit:"cover",borderRadius:"36px",boxShadow:"0 30px 80px rgba(0,0,0,.15)"}}/>
<img className="hover" src="/assets/hero-3.jpg" style={{position:"absolute",bottom:0,left:"120px",width:"280px",height:"280px",objectFit:"cover",borderRadius:"36px",boxShadow:"0 30px 80px rgba(0,0,0,.15)"}}/>
</div>
</div>
</section>

<section id="collections" style={{padding:"100px 24px"}}>
<div style={{maxWidth:"1300px",margin:"0 auto"}}>
<h2 className="section-title">Curated<span className="grad">Collections</span></h2>

<div className="two-grid" style={{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:"32px"}}>
<div className="glass" style={{borderRadius:"40px",padding:"24px"}}>
<img src="/assets/personalized-frame.jpg" style={{width:"100%",height:"620px",objectFit:"cover",borderRadius:"30px",marginBottom:"24px"}}/>
<h3 style={{fontSize:"40px",marginBottom:"16px"}}>Personalized Resin Frames</h3>
<p style={{fontSize:"20px",lineHeight:"1.8",color:"#6d5a53"}}>Elegant handcrafted keepsakes designed beautifully for emotional gifting and timeless memories.</p>
</div>

<div style={{display:"grid",gap:"32px"}}>
<div className="glass" style={{borderRadius:"40px",padding:"24px"}}>
<img src="/assets/magnet-1.jpg" style={{width:"100%",height:"260px",objectFit:"cover",borderRadius:"30px",marginBottom:"20px"}}/>
<h3 style={{fontSize:"34px"}}>Fridge Magnets</h3>
</div>

<div className="glass" style={{borderRadius:"40px",padding:"24px"}}>
<img src="/assets/wedding-frame.jpg" style={{width:"100%",height:"260px",objectFit:"cover",borderRadius:"30px",marginBottom:"20px"}}/>
<h3 style={{fontSize:"34px"}}>Wedding Luxury Gifts</h3>
</div>
</div>
</div>
</div>
</section>

<section style={{padding:"100px 24px"}}>
<div style={{maxWidth:"1300px",margin:"0 auto"}}>
<h2 className="section-title">Fridge Magnet<span className="grad">Collection</span></h2>
<div className="three-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}}>
{["magnet-1.jpg","magnet-2.jpg","magnet-3.jpg"].map((img)=>(
<div key={img} className="glass hover" style={{borderRadius:"36px",padding:"18px"}}>
<img src={`/assets/${img}`} style={{width:"100%",height:"420px",objectFit:"cover",borderRadius:"28px"}}/>
</div>
))}
</div>
</div>
</section>

<section id="instagram" style={{padding:"100px 24px"}}>
<div style={{maxWidth:"1200px",margin:"0 auto",textAlign:"center"}}>
<h2 className="section-title">Instagram<span className="grad">Showcase</span></h2>
<img className="hover" src="/assets/instagram.jpg" style={{width:"100%",maxWidth:"620px",margin:"0 auto",borderRadius:"40px",boxShadow:"0 30px 80px rgba(0,0,0,.15)"}}/>
</div>
</section>

<section style={{padding:"100px 24px"}}>
<div className="two-grid" style={{maxWidth:"1300px",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"}}>
<div className="glass hover" style={{borderRadius:"40px",padding:"24px"}}>
<img src="/assets/planter.jpg" style={{width:"100%",height:"540px",objectFit:"cover",borderRadius:"30px",marginBottom:"24px"}}/>
<h3 style={{fontSize:"38px"}}>Lifestyle Décor</h3>
</div>

<div className="glass hover" style={{borderRadius:"40px",padding:"24px"}}>
<img src="/assets/chess.jpg" style={{width:"100%",height:"540px",objectFit:"cover",borderRadius:"30px",marginBottom:"24px"}}/>
<h3 style={{fontSize:"38px"}}>Artistic Craftsmanship</h3>
</div>
</div>
</section>

<section style={{padding:"100px 24px"}}>
<div style={{maxWidth:"1300px",margin:"0 auto"}}>
<h2 className="section-title">Wedding &<span className="grad">Festive Utilities</span></h2>
<div className="two-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"}}>
<img className="hover" src="/assets/kumkum1.jpg" style={{width:"100%",height:"500px",objectFit:"cover",borderRadius:"36px"}}/>
<img className="hover" src="/assets/kumkum2.jpg" style={{width:"100%",height:"500px",objectFit:"cover",borderRadius:"36px"}}/>
</div>
</div>
</section>

<section style={{padding:"100px 24px"}}>
<div style={{maxWidth:"1100px",margin:"0 auto",textAlign:"center"}}>
<h2 className="section-title">Customer<span className="grad">Love</span></h2>
<div className="three-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}}>
{[
"\"Absolutely beautiful craftsmanship.\"",
"\"Perfect premium wedding gift.\"",
"\"The magnets looked stunning in real life.\""
].map((t,i)=>(
<div key={i} className="glass" style={{padding:"34px",borderRadius:"30px",fontSize:"20px",lineHeight:"1.8"}}>
{t}
</div>
))}
</div>
</div>
</section>

<section style={{padding:"100px 24px"}}>
<div style={{maxWidth:"1000px",margin:"0 auto"}}>
<h2 className="section-title" style={{textAlign:"center"}}>Frequently Asked<span className="grad">Questions</span></h2>

<div style={{display:"grid",gap:"24px"}}>
{[
["Do you take custom orders?","Yes, personalized custom resin creations are available."],
["Do you take wedding orders?","Yes, wedding gifting and festive bulk orders are available."],
["Can I share my own photos?","Yes, customized photo-based resin keepsakes are available."]
].map((f,i)=>(
<div key={i} className="glass" style={{padding:"30px",borderRadius:"30px"}}>
<div style={{fontSize:"28px",fontWeight:800,marginBottom:"12px"}}>{f[0]}</div>
<div style={{fontSize:"18px",lineHeight:"1.8",color:"#6d5a53"}}>{f[1]}</div>
</div>
))}
</div>
</div>
</section>

<footer id="contact" style={{padding:"120px 24px",background:"#1d1414",color:"#fff",marginTop:"80px"}}>
<div className="three-grid" style={{maxWidth:"1280px",margin:"0 auto",display:"grid",gridTemplateColumns:"1.2fr 1fr 1fr",gap:"50px"}}>
<div>
<img src="/assets/logo.png" style={{width:"150px",marginBottom:"24px"}}/>
<p style={{lineHeight:"1.9",color:"#d1c5c0",maxWidth:"420px",fontSize:"18px"}}>
Premium handcrafted personalized resin keepsakes designed beautifully for gifting, weddings and meaningful memories.
</p>
</div>

<div>
<h3 style={{fontSize:"28px",marginBottom:"24px"}}>Collections</h3>
<div style={{display:"flex",flexDirection:"column",gap:"16px",color:"#d1c5c0"}}>
<div>Personalized Frames</div>
<div>Fridge Magnets</div>
<div>Wedding Gifts</div>
<div>Festive Utilities</div>
</div>
</div>

<div>
<h3 style={{fontSize:"28px",marginBottom:"24px"}}>Connect</h3>
<div style={{display:"flex",flexDirection:"column",gap:"16px",color:"#d1c5c0"}}>
<div>@ujjwalaresinart</div>
<div>Custom Orders Available</div>
<div>WhatsApp Orders: +91 8446302691</div>
<div>Wedding & Bulk Orders</div>
<div>Luxury Personalized Gifts</div>
</div>
</div>
</div>
</footer>

</main>
)}
