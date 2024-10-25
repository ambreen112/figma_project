import style from "/styles/global.module.css";
import Image from "next/image";

export default function Featured(){
    return(
        <section className={style.featured}>
            <div className={style.featured_container}>
                <div className={style.featured_title}> Featured Work</div>
                <div className={ style.featured_items}>
                <div className={style.image1}>
                <Image src={"/pic2.png"} alt="screen" height={300} width={400}/> 
                </div>
                <div className={style.describe_feature}>
                <div className={style. des_featured_title}>Designing Dashboards </div>
                <div className={style.des_featured_date}>
                    <time className={style.time}>2020</time>
                    <div className={style. des_prop}> Dashboard</div>
                    </div>
                <div className={style.Featured_post}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                      nostrud amet. 
                      </div>
                      </div>
                      </div>
                      
                      <div className={ style.featured_items}>
                <div className={style.image2}>
                <Image src={"/pic3.png"} alt="scatct of girl" height={300} width={400}/> 
                </div>
                <div className={style.describe_feature}>
                <div className={style. des_featured_title}>Designing Dashboards </div>
                <div className={style.des_featured_date}>
                    <time className={style.time}>2020</time>
                    <div className={style. des_prop}> Dashboard</div>
                    </div>
                <div className={style.Featured_post}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                      nostrud amet. 
                      </div>
                      </div>
                      </div>
                      <div className={ style.featured_items}>
                <div className={style.image3}>
                <Image src={"/pic4.png"} alt="logo" height={300} width={400}/> 
                </div>
                <div className={style.describe_feature}>
                <div className={style. des_featured_title}>Designing Dashboards </div>
                <div className={style.des_featured_date}>
                    <time className={style.time}>2020</time>
                    <div className={style. des_prop}> Dashboard</div>
                    </div>
                <div className={style.Featured_post}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                      nostrud amet. 
                      </div>
                      
                      </div>
                     </div>
                    
                      </div>
                    
        </section>
    )
}