import style from "/styles/global.module.css";

export default function Blogs(){
    return(
       <section className={style.post}>
        <div className={style.container1}>
            <div className={style.post_top}>
                <h1>Recent Post</h1>
                <h2>View all</h2>

            </div>
            <div className={style.post_items}>
                <article className={style.item_post}>
                    <div className={style.post_title}> Making a design system from  scratch</div>
                    <div className={style.post_date}> 12 Feb 2020  |  Design, Pattern</div>
                    <div className={style.post_text}>Amet minim mollit non deserunt ullamco est sit aliqua
                     dolor do amet sint. Velit officia consequat duis enim 
                     velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    
                </article>
                <article className={style.item_post}>
                    <div className={style.post_title}> Making a design system from  scratch</div>
                    <div className={style.post_date}> 12 Feb 2020  |  Design, Pattern</div>
                    <div className={style.post_text}>Amet minim mollit non deserunt ullamco est sit aliqua
                     dolor do amet sint. Velit officia consequat duis enim 
                     velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    
                </article>
                
            </div>

        </div>

       </section>

    

  



    )
}