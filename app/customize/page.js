
export default function CustomizePage(){
return(
<main style={{
minHeight:"100vh",
background:"#f8f4ef",
padding:"140px 24px 80px",
fontFamily:"Arial,sans-serif"
}}>

<div style={{
maxWidth:"1280px",
margin:"0 auto",
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"60px",
alignItems:"center"
}}>

<div>
<h1 style={{
fontSize:"64px",
fontWeight:"900",
marginBottom:"24px",
lineHeight:"1"
}}>
Contact Ujjwala's Resin Art
</h1>

<p style={{
fontSize:"22px",
lineHeight:"1.8",
color:"#6d5a53",
marginBottom:"40px"
}}>
For custom orders, collaborations, gifting, and décor inquiries.
</p>

<div style={{
display:"flex",
flexDirection:"column",
gap:"26px",
fontSize:"22px"
}}>

<div>
<b>Instagram:</b> @ujjwalaresinart
</div>

<div>
<b>WhatsApp:</b> +91 8446302691
</div>

<div>
<b>Email:</b> u.resinart@gmail.com
</div>

</div>
</div>

<div style={{
background:"rgba(255,255,255,.6)",
backdropFilter:"blur(24px)",
padding:"34px",
borderRadius:"34px",
boxShadow:"0 20px 60px rgba(0,0,0,.08)"
}}>

<form action="https://formsubmit.co/u.resinart@gmail.com" method="POST" encType="multipart/form-data" style={{
display:"flex",
flexDirection:"column",
gap:"22px"
}}>

<input type="hidden" name="_subject" value="New Resin Art Customization Inquiry" />
<input type="hidden" name="_captcha" value="false" />

<input
name="name"
placeholder="Your Name"
style={{
padding:"22px",
borderRadius:"20px",
border:"1px solid #ddd",
fontSize:"18px"
}}
/>

<input
name="email"
placeholder="Your Email"
style={{
padding:"22px",
borderRadius:"20px",
border:"1px solid #ddd",
fontSize:"18px"
}}
/>

<textarea
name="message"
placeholder="Tell us about your customization requirement"
rows={6}
style={{
padding:"22px",
borderRadius:"20px",
border:"1px solid #ddd",
fontSize:"18px",
resize:"vertical"
}}
/>

<div style={{
background:"#fff",
padding:"20px",
borderRadius:"20px",
border:"1px dashed #bbb"
}}>
<label style={{
fontWeight:"700",
display:"block",
marginBottom:"12px"
}}>
Attach Reference Image
</label>

<input type="file" name="attachment" />
</div>

<button style={{
padding:"22px",
borderRadius:"20px",
border:"none",
background:"#000",
color:"#fff",
fontWeight:"700",
fontSize:"18px",
cursor:"pointer"
}}>
Send Inquiry
</button>

</form>

</div>

</div>

</main>
)}
