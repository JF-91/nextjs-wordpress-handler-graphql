
import { getPageContentNode } from "@/hooks/getPageContentNode";
import RenderContentBlock from "./components/RenderContentBlock";


export default async function Courses() {

    // const { pageContent } = await getPageContentNode('/courses');

    return (
        <div>
            <h1>Courses</h1>
            <p>This is the courses page</p>

            {/* {pageContent && pageContent.content && (
                <div 
                    dangerouslySetInnerHTML={{ __html: pageContent.content }} 
                />
            )} */}

            <RenderContentBlock/>
        </div>
        
    );
}


