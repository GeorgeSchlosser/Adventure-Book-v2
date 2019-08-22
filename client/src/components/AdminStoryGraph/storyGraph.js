import cytoscape from 'cytoscape';

export default (seeds, layout, zoomOpt, curveStyle) => {

if(!layout) {
    layout = "breadthfirst";
}

if(!zoomOpt) {
    zoomOpt = false;
}

if(curveStyle && (layout === "breadthfirst")) {
    curveStyle = "taxi";
} else {
    curveStyle = null;
}

var graphElements = [];
    for(let i=0; i<seeds.length; i++){
        let elementTitle = seeds[i].scene_title;
        let elementChoiceA = seeds[i].choice_a;
        let elementChoiceB = seeds[i].choice_b;
        let elementNextNum = seeds[i].next_scene;
        let correctChoicePropName = seeds[i].correct_choice;
        let elementCorrectChoice = seeds[i][correctChoicePropName];
        let elementCorrectResult = seeds.filter(obj => { return obj.id === elementNextNum });
        let choice_a_id = "choice_a_" + i;
        let choice_b_id = "choice_b_" + i;
        
        // Build node and decision edge connectors in graphElements object array
        graphElements.push(
            { data: 
                { 
                    id: elementTitle,
                    class: "scene"
                }
            });
        // Do not build 'choice' nodes for final scene (none available)
        if( i < seeds.length-1 ) {
            
            graphElements.push(
                { data: 
                    {   
                        id: elementChoiceA,
                        class: "choice"
                    }
                });

            graphElements.push(
                { data: 
                    {
                        id: elementChoiceB,
                        class: "choice"
                    }
                });

            graphElements.push(
                { data: 
                    {
                        id: choice_a_id,
                        source: elementTitle,
                        target: elementChoiceA
                    }
                });

            graphElements.push(
                { data: 
                    {
                        id: choice_b_id,
                        source: elementTitle,
                        target: elementChoiceB
                    }
                });

            graphElements.push(
                { data: 
                    {
                        id: i,
                        source: elementCorrectChoice,
                        target: elementCorrectResult[0].scene_title
                    }
                });
        }
    }

    var cy = cytoscape({

        container: document.getElementById("cy"), // container to render within
        zoom: (0.5),
        minZoom: 0.2,
        maxZoom: 3,
        userZoomingEnabled: zoomOpt,
        elements: graphElements,

        // the stylesheet for the graph
        style: [
        {
            "selector": "node",
            "style": {
                "background-color": "#666",
                "shape": "ellipse",
                "label": "data(id)"
            }
        },
        {
            "selector": "edge",
            "style": {
                "width": 4,
                "line-color": "#cc6",
                "target-arrow-color": "#fff",
                "target-arrow-shape": "triangle",
                "mid-target-arrow-shape": "vee",
                "arrow-scale": 3,
                "curve-style": curveStyle
            }
        }
        ],

        // Node layout options
        "layout": {
            "name": layout, //default: breadthfirst
            "fit": true,
            "directed": true,
            "animate": false,
            "grid": false,
            "avoidOverlap": true
        }

    });
}