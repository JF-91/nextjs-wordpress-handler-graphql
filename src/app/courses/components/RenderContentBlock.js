'use server'

import { getPageContentNode } from '@/hooks/getPageContentNode';
import {cleanAndTransformBlocks} from '@/utils/cleanAndTransformBlocks';

export default async function RenderContentBlock() {
    const { pageContent } = await getPageContentNode('/courses');
    console.log(cleanAndTransformBlocks(pageContent.blocks));
  return (
    <div dangerouslySetInnerHTML={{ __html: pageContent.content }}
            
    />
  );
}


export async function getServerSideProps() {
    const { pageContent } = await getPageContentNode('/courses');
    
    return {
        props: {
            blocks: cleanAndTransformBlocks(pageContent.blocks),
        },
    };
}