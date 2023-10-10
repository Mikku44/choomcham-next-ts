import { GetServerSideProps, InferGetServerSidePropsType } from "next"

const blogs = [
    { id: '1', title: 'title', description: 'name' },
    { id: '2', title: 'title', description: 'name' },
    { id: '3', title: 'title', description: 'name' },
    { id: '4', title: 'title', description: 'name' },
    { id: '5', title: 'title', description: 'name' },
]


function Blog() {
    return (
        <>

            <div className="my-10 sm:mx-20 mx-5">

                <div>ชุ่มฉ่ำ แบรนดิ้ง</div>
                {/* top */}
                <div className="mb-10">
                    <h1 className="text-3xl sm:text-5xl thai">Blog</h1>
                    <br />

                </div>


                <div className="flex gap-5">
                    {blogs.map((blog) => {
                        return (<a href={'blog/' + blog.id} className="card shadow-md p-5" key={blog.id}>
                            <div className="text-xl">{blog.title + blog.id}</div>
                            <div>{blog.description}</div>
                        </a>)

                    })}
                </div>
            </div>

        </>
    )
}





export default Blog