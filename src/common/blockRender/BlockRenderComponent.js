

export default function BlockRenderComponent( {blocks} ) {
    return (
        <div>
            {
                blocks.map((block, index) => {
                    switch (block.__typename) {
                        case "core/post-content":
                        case "core/columns":
                        case "core/column":
                        case "core/post-content":

                            return <p key={index}>{block.attributes.content}</p>
                        case 'CoreHeadingBlock':
                            return <h1 key={index}>{block.attributes.content}</h1>
                        default:
                            return null;
                    }
                })
            }
        </div>
    );
}