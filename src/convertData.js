export default function convertData(data) {
    const tree = {};
    const diagnoses = {};
  
    for (const item of data) {
      const question_id = item.queid;
      const node = { children: [] };
      if ("question" in item) {
        node.name = item.question;
      }
  
      tree[question_id] = node;
  
      if ("options" in item) {
        const options = item.options;
        for (const [option_text, next_question_id] of Object.entries(options)) {
          if (Array.isArray(next_question_id)) {
            // If the next_question_id is an array, treat it as the final level answer
            node.children.push({ name: next_question_id.join(", "), option: option_text });
          } else {
            node.children.push({ name: next_question_id, option: option_text });
  
            // Check if the option_text is a diagnosis
            if (typeof option_text === "string") {
              diagnoses[next_question_id] = option_text;
            }
          }
        }
      }
    }
  
    // Extract tree edges from the dictionary
    const edges = [];
  
    const getEdges = (treedict, parent = null, option_text = null) => {
      for (const [question_id, node] of Object.entries(treedict)) {
        if (parent !== null) {
          edges.push([parent, question_id, option_text]);
        }
        for (const { name: child, option } of node.children) {
          if (Array.isArray(child)) {
            console.log("Leaf string array: ", child.join(", "));
          } else if (child in treedict) {
            getEdges({ [child]: treedict[child] }, question_id, option);
          }
        }
      }
    };
  
    getEdges(tree);
  
    // Construct the tree structure
    const root = Object.values(tree)[0];
  
    const convertToTree = (node) => {
      const children = node.children.map((child) => convertToTree(tree[child.name]));
      return { name: node.name, children };
    };
  
    const convertedData = [convertToTree(root)];
  
    return convertedData;
  }
  