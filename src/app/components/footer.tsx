

function Footer(){
    return (
      <>
        <div className="footer p-10 ">
        <aside>
          <img width="250" src="https://www.choomcham.com/assets/images/6d557835.png" alt="choomcham logo" />
          <p>Copyright © 2021 ชุ่มฉ่ำ branding.<br/>อยากสร้าง Brand ให้ชัดเล่าเรื่องให้โดนคุณมาถูกที่แล้ว</p>
        </aside> 
        <nav>
          <div className="footer-title">Social</div> 
          <div className="grid grid-flow-col gap-4">
           
            <a href="https://lin.ee/5p0JD5t"><img width="24" height="24" src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="linelogo" /></a> 
            <a href="https://youtube.com/channel/UCqiaFEL0g1TAFiK_x7acvRw"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-red-500"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
            <a href="https://facebook.com/choomchambranding"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-600"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
      </div>
      </>
    )
}

export default Footer