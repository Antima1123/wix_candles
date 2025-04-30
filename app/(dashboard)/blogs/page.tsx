export default async function Blogpage() {
        const res = await fetch("http://antima-blogs.unaux.com/wp-json/wp/v2/posts");
        // const data = await res.json()
    return(
        <div className="">
            Blogpage
        </div>
    )
}
