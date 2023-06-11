import React, { useEffect } from "react";
import { DataSet, Network } from "vis-network/standalone";

const QuestionTree = ({ data }) => {
  const rootNodeId = "Q1";  // Adjust this to your root node ID

  useEffect(() => {
    let idToNodeMap = new Map();
    let edges = [];

    // Step 1: Create nodes for each question and map them by their ID.
    data.forEach((datum) => {
      idToNodeMap.set(datum.queid, {
        id: datum.queid,
        label: datum.question,
        level: Number(datum.level),
        color: { background: "#D2E5FF", border: "#2B7CE9" },
        hidden: datum.queid !== rootNodeId,  // All nodes except root are hidden initially
      });
    });

    // Step 2: Create edges for each option that leads to another question.
    data.forEach((datum) => {
      for (let [option, targetId] of Object.entries(datum.options)) {
        if (Array.isArray(targetId)) {
          targetId.forEach((target) => {
            edges.push({ from: datum.queid, to: target, label: option, hidden: true });
            idToNodeMap.set(target, {
              id: target,
              label: target,
              level: Number(datum.level) + 1,
              color: { background: "#D2E5FF", border: "#e9e62b" },
              hidden: true,
            });
          });
        } else {
          edges.push({ from: datum.queid, to: targetId, label: option, hidden: true });
        }
      }
    });

    // Step 3: Create a network with the nodes and edges.
    let nodes = Array.from(idToNodeMap.values());
    let container = document.getElementById("mynetwork");
    let networkData = {
      nodes: new DataSet(nodes),
      edges: new DataSet(edges),
    };
    let options = {
      physics: {
        hierarchicalRepulsion: {
          nodeDistance: 350,
        },
      },
      layout: {
        hierarchical: {
          direction: "UD",
        },
      },
      nodes: {
        shape: "none",
        font: {
          size: 10,
        },
      },
      edges: {
        arrows: {
          to: {
            enabled: true,
            type: "arrow",

          },
        },
        font: {
          size: 5,
        },
        color: {
          inherit: false,
          color: '#FF69B4',
          opacity: 0.8,
        },
        smooth: {
          type: 'dynamic',
        },
      },
      interaction: {
        navigationButtons: true,
        keyboard: true,
        hoverConnectedEdges: true,
      },
    };
    let network = new Network(container, networkData, options);

    // Add click listener to nodes to expand to the next level
    network.on("click", function (params) {
      if (params.nodes.length > 0) {
        let clickedNodeId = params.nodes[0]; // get id of the clicked node

        // Get all connected nodes and edges of the clicked node
        let connectedNodeIds = network.getConnectedNodes(clickedNodeId);
        let connectedEdgeIds = network.getConnectedEdges(clickedNodeId);

        // Update visibility of the connected nodes and edges
        connectedNodeIds.forEach(nodeId => networkData.nodes.update({ id: nodeId, hidden: false }));
        connectedEdgeIds.forEach(edgeId => networkData.edges.update({ id: edgeId, hidden: false }));
      }
    });
  }, [data, rootNodeId]);

  // Use 100vw and 100vh to make the container full screen
  return <div id="mynetwork" style={{ width: "100vw", height: "100vh" }}></div>;
};

export default QuestionTree;
