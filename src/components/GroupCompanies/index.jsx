'use client';
import React, { useEffect, useRef } from "react";
import Split from "../Split";
import { Network } from "vis-network";
import { DataSet } from "vis-data";

const GroupCompanies = () => {
  const networkRef = useRef(null);

  useEffect(() => {
    // ノードの定義
    const nodes = new DataSet([
      { 
        id: 1, 
        label: 'WHDC',
        image: '/img/logo/whdc_group_logo/whdc_logo.png',
        shape: 'image',
        font: { size: 16 },
        widthConstraint: { minimum: 120, maximum: 120 },
        heightConstraint: { minimum: 70, maximum: 70 }
      },
      { 
        id: 2, 
        label: 'Acrodea',
        image: '/img/logo/whdc_group_logo/acrodea.png',
        shape: 'image',
        widthConstraint: { minimum: 120, maximum: 120 },
        heightConstraint: { minimum: 70, maximum: 70 },
        url: 'https://www.acrodea.co.jp/'
      },
      { 
        id: 3, 
        label: 'Interplan',
        image: '/img/logo/whdc_group_logo/interplan.png',
        shape: 'image',
        widthConstraint: { minimum: 120, maximum: 120 },
        heightConstraint: { minimum: 70, maximum: 70 },
        url: 'https://interplan-school.com/'
      },
      { 
        id: 4, 
        label: 'Media Incuvate',
        image: '/img/logo/whdc_group_logo/mediaincuvate.png',
        shape: 'image',
        widthConstraint: { minimum: 120, maximum: 120 },
        heightConstraint: { minimum: 70, maximum: 70 },
        url: 'https://media-incubate.com/'
      },
      { 
        id: 5, 
        label: 'Nikuyoko',
        image: '/img/logo/whdc_group_logo/nikuyoko.png',
        shape: 'image',
        widthConstraint: { minimum: 120, maximum: 120 },
        heightConstraint: { minimum: 70, maximum: 70 },
        url: 'https://nikuyokocho.jp/'
      },
      { 
        id: 6, 
        label: 'Sunrise Japan',
        image: '/img/logo/whdc_group_logo/sunrisejapan.png',
        shape: 'image',
        widthConstraint: { minimum: 120, maximum: 120 },
        heightConstraint: { minimum: 70, maximum: 70 },
        url: 'https://sunrisejapan.com/'
      },
      { 
        id: 7, 
        label: 'UBE',
        image: '/img/logo/whdc_group_logo/ube.png',
        shape: 'image',
        widthConstraint: { minimum: 120, maximum: 120 },
        heightConstraint: { minimum: 70, maximum: 70 },
        url: 'https://ube-recycle.co.jp/'
      },
      { 
        id: 8, 
        label: 'Dream Planet',
        image: '/img/logo/whdc_group_logo/dreamplanet.png',
        shape: 'image',
        widthConstraint: { minimum: 120, maximum: 120 },
        heightConstraint: { minimum: 70, maximum: 70 },
        url: 'https://www.dreamplanet.co.jp/capsule/'
      }
    ]);

    // エッジの定義
    const edges = new DataSet([
      { from: 1, to: 2, length: 200, physics: true },
      { from: 1, to: 3, length: 200, physics: true },
      { from: 1, to: 4, length: 200, physics: true },
      { from: 1, to: 5, length: 200, physics: true },
      { from: 1, to: 6, length: 200, physics: true },
      { from: 1, to: 7, length: 200, physics: true },
      { from: 1, to: 8, length: 200, physics: true }
    ]);

    // ネットワークの設定
    const options = {
      nodes: {
        borderWidth: 3,
        borderWidthSelected: 4,
        brokenImage: undefined,
        fixed: {
          x: false,
          y: false
        },
        color: {
          background: 'rgba(255, 255, 255, 0.1)',
          border: '#ffffff',
          highlight: {
            background: 'rgba(255, 255, 255, 0.3)',
            border: '#ffffff'
          }
        },
        font: {
          color: '#ffffff',
          size: 16,
          face: 'Arial',
          strokeWidth: 2,
          strokeColor: '#000000'
        },
        shapeProperties: {
          useBorderWithImage: true,
          useImageSize: false
        }
      },
      edges: {
        color: {
          color: 'rgba(0, 255, 128, 0.5)',
          highlight: '#00ff80'
        },
        width: 2,
        smooth: {
          type: 'continuous',
          roundness: 0.2,
          forceDirection: 'none'
        },
        length: 250
      },
      physics: {
        enabled: true,
        stabilization: {
          enabled: true,
          iterations: 100,
          updateInterval: 25,
          fit: true
        },
        barnesHut: {
          gravitationalConstant: -1500,
          centralGravity: 0.2,
          springLength: 250,
          springConstant: 0.03,
          damping: 0.12,
          avoidOverlap: 1
        },
        minVelocity: 0.3,
        maxVelocity: 1.5,
        solver: 'barnesHut',
        timestep: 0.5
      },
      layout: {
        randomSeed: 2,
        improvedLayout: true,
        hierarchical: false
      },
      interaction: {
        hover: true,
        zoomView: false,
        dragView: false,
        dragNodes: true
      }
    };

    // ネットワークの作成
    if (networkRef.current) {
      const network = new Network(
        networkRef.current,
        { nodes, edges },
        options
      );

      // 中心ノードの位置を固定
      network.on("stabilizationIterationsDone", function () {
        const containerWidth = networkRef.current.clientWidth;
        const containerHeight = networkRef.current.clientHeight;
        
        // 初期位置の設定のみ行い、固定はしない
        const centerX = containerWidth * 0.05;
        const centerY = containerHeight * 0.05;
        network.moveNode(1, centerX, centerY);
        
        // 他のノードを扇形に配置（右下方向に）
        const radius = 300;
        const nodes = network.body.data.nodes;
        const nodeCount = nodes.length - 1;
        
        for (let i = 2; i <= nodeCount + 1; i++) {
          const angle = (Math.PI * 0.75) + ((i - 2) * Math.PI * 0.5) / (nodeCount - 1);
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          network.moveNode(i, x, y);
        }

        // エッジの長さをアニメーション
        let increasing = true;
        const animateEdges = () => {
          const currentLength = network.body.data.edges.get()[0].length;
          
          if (increasing && currentLength >= 280) {
            increasing = false;
          } else if (!increasing && currentLength <= 220) {
            increasing = true;
          }
          
          const newLength = increasing ? currentLength + 0.3 : currentLength - 0.3;
          
          edges.forEach((edge, index) => {
            edges.update({ id: edge.id, length: newLength });
          });
          
          requestAnimationFrame(animateEdges);
        };
        
        animateEdges();
      });

      // クリックイベントの処理
      network.on("click", function (params) {
        if (params.nodes.length > 0) {
          const clickedNode = nodes.get(params.nodes[0]);
          if (clickedNode.url) {
            window.open(clickedNode.url, '_blank');
          }
        }
      });
    }
  }, []);

  return (
    <section id="group-companies" className="group-companies section-padding">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              GROUP COMPANIES
            </h3>
          </Split>
          <Split>
            <p className="wow txt words chars splitting" data-splitting>
              
            </p>
          </Split>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div 
              ref={networkRef} 
              className="network-container wow fadeIn" 
              data-wow-delay=".3s"
              style={{ 
                height: '800px',
                width: '100%',
                background: '#0C0C0C',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '20px 20px 60px 20px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;