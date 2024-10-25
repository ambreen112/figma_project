import style from "/styles/global.module.css";
import Image from "next/image";



export default function Footer(){
    return(
      <footer className={style.footer}>
        <div className={style.container4}>
            <div className={style.footer_social_list}> 
                <Image src={"/facebook.png"} alt="facebook" height={20} width={20}/>
                <Image src={"/twiter.png"} alt="twiter" height={20} width={20}/>
                <Image src={"/bird.png"} alt="bird" height={20} width={20}/>
                <Image src={"/lindin.png"} alt="lindin" height={20} width={20}/>
            </div>
            <div className={style.footer_social}>Copyright ©2020 All rights reserved</div>
        </div>
      </footer>
    )
}