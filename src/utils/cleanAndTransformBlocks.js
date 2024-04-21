import {v4 as uuid} from 'uuid';

// export const cleanAndTransformBlocks = (blocksJSON) => {

//     // const cleanBlocks = blocks.map((block) => {
//     //     const { __typename, ...cleanBlock } = block;
//     //     return cleanBlock;
//     // });

//     // const transformedBlocks = cleanBlocks.map((block) => {
//     //     const { attributes, innerBlocks, innerHTML, tagName } = block;
//     //     return {
//     //         attributes,
//     //         innerBlocks: innerBlocks ? cleanAndTransformBlocks(innerBlocks) : null,
//     //         innerHTML,
//     //         tagName,
//     //     };
//     // });

//     // return transformedBlocks;

//     const blocks = JSON.parse( JSON.stringify(blocksJSON) )

//     const asignIds = (b) => {

//         b.forEach((block) => {
//             block.id = uuid();
//             if (block.innerBlocks) {
//                 asignIds(block.innerBlocks);
//             }
//         });
//     }


//     asignIds(blocks);

//     return blocks;
// }

export const cleanAndTransformBlocks = (blocksJSON) => {
    
        const blocks = JSON.parse( JSON.stringify(blocksJSON) )
    
        const asignIds = (b) => {
    
            b.forEach((block) => {
                block.id = uuid();
                if (block.innerBlocks) {
                    asignIds(block.innerBlocks);
                }
            });
        }

        const cleanBlocks = blocks.map((block) => {
            const { __typename, ...cleanBlock } = block;
            return cleanBlock;
        });

        const transformedBlocks = cleanBlocks.map((block) => {

            const { attributes, innerBlocks, innerHTML, tagName } = block;

            return {
                attributes,
                innerBlocks: innerBlocks ? cleanAndTransformBlocks(innerBlocks) : null,
                innerHTML,
                tagName,
            };
        }

        );

        asignIds(transformedBlocks);

        return transformedBlocks;
    }