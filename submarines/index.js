const data = [
    {
                 widthContainer:200,
                 heightContainer:100,
                 submarineWidth:100,
                 submarineHeight:45,
                 portholeWidth:15,
                 turretWidth:100,
                 turretHeight:50,
                 periscopeWidth:30,
                 periscopeHeight:80,
                 color:getRandomColor(),
            },
            {
                 widthContainer:300,
                 heightContainer:150,
                 submarineWidth:150,
                 submarineHeight:81,
                 portholeWidth:20,
                 turretWidth:150,
                 turretHeight:70,
                 periscopeWidth:20,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                 widthContainer:200,
                 heightContainer:100,
                 submarineWidth:100,
                 submarineHeight:54,
                 portholeWidth:20,
                 turretWidth:80,
                 turretHeight:45,
                 periscopeWidth:22,
                 periscopeHeight:64,
                 color:getRandomColor(),
            },
            {
                 widthContainer:500,
                 heightContainer:300,
                 submarineWidth:300,
                 submarineHeight:150,
                 portholeWidth:30,
                 turretWidth:250,
                 turretHeight:110,
                 periscopeWidth:45,
                 periscopeHeight:120,
                 color:getRandomColor(),
            },
            {
                 widthContainer:150,
                 heightContainer:75,
                 submarineWidth:75,
                 submarineHeight:40,
                 portholeWidth:12,
                 turretWidth:62.5,
                 turretHeight:25,
                 periscopeWidth:17,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                 widthContainer:800,
                 heightContainer:500,
                 submarineWidth:500,
                 submarineHeight:250,
                 portholeWidth:50,
                 turretWidth:450,
                 turretHeight:200,
                 periscopeWidth:60,
                 periscopeHeight:160,
                 color:getRandomColor(),
            },
            {
                 widthContainer:175,
                 heightContainer:102.5,
                 submarineWidth:132.5,
                 submarineHeight:57.5,
                 portholeWidth:22.5,
                 turretWidth:100,
                 turretHeight:75,
                 periscopeWidth:20,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                 widthContainer:160,
                 heightContainer:80,
                 submarineWidth:80,
                 submarineHeight:34,
                 portholeWidth:12,
                 turretWidth:65,
                 turretHeight:40,
                 periscopeWidth:20,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                 widthContainer:250,
                 heightContainer:125,
                 submarineWidth:125,
                 submarineHeight:65,
                 portholeWidth:25,
                 turretWidth:100,
                 turretHeight:70,
                 periscopeWidth:20,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                 widthContainer:350,
                 heightContainer:175,
                 submarineWidth:125,
                 submarineHeight:70,
                 portholeWidth:18,
                 turretWidth:100,
                 turretHeight:74,
                 periscopeWidth:20,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                 widthContainer:155,
                 heightContainer:75,
                 submarineWidth:75,
                 submarineHeight:40,
                 portholeWidth:12,
                 turretWidth:70,
                 turretHeight:35,
                 periscopeWidth:20,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                 widthContainer:250,
                 heightContainer:125,
                 submarineWidth:125,
                 submarineHeight:62.5,
                 portholeWidth:12,
                 turretWidth:100,
                 turretHeight:62.5,
                 periscopeWidth:20,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                 widthContainer:100,
                 heightContainer:50,
                 submarineWidth:50,
                 submarineHeight:27,
                 portholeWidth:8,
                 turretWidth:40,
                 turretHeight:24,
                 periscopeWidth:10,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                 widthContainer:200,
                 heightContainer:100,
                 submarineWidth:100,
                 submarineHeight:54,
                 portholeWidth:15,
                 turretWidth:80,
                 turretHeight:50,
                 periscopeWidth:20,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                 widthContainer:400,
                 heightContainer:200,
                 submarineWidth:200,
                 submarineHeight:98,
                 portholeWidth:20,
                 turretWidth:150,
                 turretHeight:98,
                 periscopeWidth:30,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                 widthContainer:150,
                 heightContainer:75,
                 submarineWidth:75,
                 submarineHeight:40,
                 portholeWidth:12,
                 turretWidth:60,
                 turretHeight:35,
                 periscopeWidth:15,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                 widthContainer:800,
                 heightContainer:450,
                 submarineWidth:450,
                 submarineHeight:250,
                 portholeWidth:45,
                 turretWidth:400,
                 turretHeight:220,
                 periscopeWidth:100,
                 periscopeHeight:420,
                 color:getRandomColor(),
            },
            {
                 widthContainer:175,
                 heightContainer:120.5,
                 submarineWidth:120.5,
                 submarineHeight:65.5,
                 portholeWidth:20.5,
                 turretWidth:100,
                 turretHeight:75,
                 periscopeWidth:20,
                 periscopeHeight:80,
                 color:getRandomColor(),
            },
            {
                 widthContainer:200,
                 heightContainer:100,
                 submarineWidth:100,
                 submarineHeight:50,
                 portholeWidth:20,
                 turretWidth:80,
                 turretHeight:48,
                 periscopeWidth:20,
                 periscopeHeight:60,
                 color:getRandomColor(),
            },
            {
                widthContainer:350,
                heightContainer:300,
                submarineWidth:350,
                submarineHeight:180,
                portholeWidth:50,
                turretWidth:260,
                turretHeight:108,
                periscopeWidth:40,
                periscopeHeight:160,
                color:getRandomColor(),
           }, 
    ]

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var width = 2048
    var height = 2000
    var coordinates = []

    for(i=0;i<data.length;i++)
        coordinates[i] = {
            x : Math.random()*(width)+data[i].submarineWidth*2,
            y : Math.random()*(height)+data[i].submarineHeight*2
        }

    var html = d3.select("html").attr("height","500%")
    var body = d3.select("svg").selectAll("g")
    var submarineContainer = body
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function(d,i) {
            return "translate(" + coordinates[i].x + "," + coordinates[i].y + ")"
        })
        .attr("id", function(d,i) {
            return "svg" + i
        })

    /*submarinePeriscope*/
    submarineContainer   
    .append("rect")
    .attr("id", "Rect_0")
    .attr("x", function(d) {
        return d.submarineWidth
    })
    .attr("y", function(d) {
        return -d.submarineHeight
    })
    .attr("width", function(d) {
        return d.periscopeWidth
    })
    .attr("height", function(d) {
        return d.periscopeHeight
    })
     .attr("stroke", "black")
     .attr("fill", function(d) {
         return d.color
     })
    .attr("stroke-width", 3)

    /*submarineTurret*/
    submarineContainer   
    .append("rect")
    .attr("id", "Rect_1")
    .attr("x", function(d) {
        return d.submarineWidth/2
    })
    .attr("y", function(d) {
        return -d.submarineHeight/2
    })
    .attr("width", function(d) {
        return d.turretWidth
    })
    .attr("height", function(d) {
        return d.turretHeight
    })
     .attr("stroke", "black")
     .attr("fill", function(d) {
        return d.color
    })
     .attr("stroke-width", 3)

    /*submarineBody*/
    submarineContainer
    .append("ellipse")
    .attr("cx", function(d) {
        return d.widthContainer/d.portholeWidth + d.submarineWidth
    })      
    .attr("cy", function(d) {
        return  d.heightContainer/2
    })
    .attr("rx", function(d) {
        return d.submarineWidth
    })
    .attr("ry", function(d) {
        return d.submarineHeight
    })
    .attr("stroke", "black")
    .attr("fill", function(d) {
         return d.color
     })
    .attr("stroke-width", 3)

    /*submarinePorthole*/
    submarineContainer
    .append("circle")
    .attr("id", "Porthole_0")
    .attr("cx",function(d) {
        return d.submarineWidth/2
    })
    .attr("cy", function(d) {
        return  d.submarineHeight
    })
    .attr("r", function(d) { 
        return d.portholeWidth
    })
    .attr("stroke", "black")
    .attr("fill","#33FFFC")
    .attr("stroke-width", 2.5)

    /*submarinePorthole*/
    submarineContainer
    .append("circle")
    .attr("id", "Porthole_1")
    .attr("cx", function(d) {
        return (d.submarineWidth/2)*2
    })
    .attr("cy", function(d) {
        return  d.submarineHeight
    })
    .attr("r", function(d) {
        return d.portholeWidth
    })
    .attr("stroke", "black")
    .attr("fill","#33FFFC")
    .attr("stroke-width", 2.5)

    /*submarinePorthole*/
    submarineContainer
    .append("circle")
    .attr("id", "Porthole_2")
    .attr("cx", function(d) {
        return (d.submarineWidth/2) + d.submarineWidth
    })
    .attr("cy", function(d) {
        return  d.submarineHeight
    })
    .attr("r", function(d) {
        return d.portholeWidth
    })
    .attr("stroke", "black")
    .attr("fill","#33FFFC")
    .attr("stroke-width", 2.5)

     
    //on click
    d3.selectAll("g")
    .on("click", function(d,j){

        rndIndex = Math.floor(Math.random()*data.length)
        console.log(rndIndex);

        // assegno i valori dell'array a delle variabili
        var widthContainer_j = data[j].widthContainer
        var widthContainer_rndIndex = data[rndIndex].widthContainer
        var heightContainer_j = data[j].heightContainer
        var heightContainer_rndIndex = data[rndIndex].heightContainer
        var submarineWidth_j = data[j].submarineWidth
        var submarineWidth_rndIndex = data[rndIndex].submarineWidth
        var submarineHeight_j = data[j].submarineHeight
        var submarineHeight_rndIndex = data[rndIndex].submarineHeight
        var periscopeWidth_j = data[j].periscopeWidth
        var periscopeWidth_rndIndex = data[rndIndex].periscopeWidth
        var periscopeHeight_j = data[j].periscopeHeight
        var periscopeHeight_rndIndex = data[rndIndex].periscopeHeight
        var turretWidth_j = data[j].turretWidth
        var turretWidth_rndIndex = data[rndIndex].turretWidth
        var turretHeight_j = data[j].turretHeight
        var turretHeight_rndIndex = data[rndIndex].turretHeight
        var portholeWidth_j = data[j].portholeWidth
        var portholeWidth_rndIndex = data[rndIndex].portholeWidth
        var color_j = data[j].color
        var color_rndIndex = data[rndIndex].color
        

        // aggiorno i valori dell'array
        data[j].widthContainer = widthContainer_rndIndex
        data[j].heightContainer = heightContainer_rndIndex
        data[j].periscopeHeight = periscopeHeight_rndIndex
        data[j].periscopeWidth = periscopeWidth_rndIndex
        data[j].submarineWidth = submarineWidth_rndIndex
        data[j].submarineHeight = submarineHeight_rndIndex
        data[j].turretHeight = turretHeight_rndIndex
        data[j].turretWidth = turretWidth_rndIndex
        data[j].portholeWidth = portholeWidth_rndIndex
        data[j].color = color_rndIndex
        data[rndIndex].widthContainer = widthContainer_j
        data[rndIndex].heightContainer = heightContainer_j
        data[rndIndex].submarineWidth = submarineWidth_j
        data[rndIndex].submarineHeight = submarineHeight_j
        data[rndIndex].periscopeWidth = periscopeWidth_j
        data[rndIndex].periscopeHeight = periscopeHeight_j
        data[rndIndex].turretWidth = turretWidth_j
        data[rndIndex].turretHeight = turretHeight_j
        data[rndIndex].portholeWidth = portholeWidth_j  
        data[rndIndex].color = color_j

        
        // ellipse
        d3.select("#svg" + j)
        .select("ellipse")
        .transition()
        .delay(200)
        .attr("cx", widthContainer_rndIndex/portholeWidth_rndIndex + submarineWidth_rndIndex)      
        .attr("cy", heightContainer_rndIndex/2)
        .attr("rx", submarineWidth_rndIndex)
        .attr("ry", submarineHeight_rndIndex)
        .style("fill", color_rndIndex)
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .select("ellipse")
        .transition()
        .delay(200)
        .attr("cx", widthContainer_j/portholeWidth_j + submarineWidth_j)      
        .attr("cy", heightContainer_j/2)
        .attr("rx", submarineWidth_j)
        .attr("ry", submarineHeight_j)
        .style("fill", color_j)
        .duration(2500)

        // rect_periscope
        d3.select("#svg" + j)
        .select("#Rect_0")
        .transition()
        .delay(200)
        .attr("x", submarineWidth_rndIndex)
        .attr("y", function() {
            return -submarineHeight_rndIndex
        })
        .attr("width", periscopeWidth_rndIndex)
        .attr("height", periscopeHeight_rndIndex)
        .style("fill", color_rndIndex)
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .select("#Rect_0")
        .transition()
        .delay(200)
        .attr("x", submarineWidth_j)
        .attr("y", function() {
            return -submarineHeight_j
        })
        .attr("width", periscopeWidth_j)
        .attr("height", periscopeHeight_j)
        .style("fill", color_j)
        .duration(2500)

        // rect_turret
        d3.select("#svg" + j)
        .select("#Rect_1")
        .transition()
        .delay(200)
        .attr("x", function() {
            return submarineWidth_rndIndex/2
        })
        .attr("y", function() {
            return -submarineHeight_rndIndex/2
        })
        .attr("width", turretWidth_rndIndex)
        .attr("height", turretHeight_rndIndex)
        .style("fill", color_rndIndex)
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .select("#Rect_1")
        .transition()
        .delay(200)
        .attr("x", function() {
            return submarineWidth_j/2
        })
        .attr("y", function() {
            return -submarineHeight_j/2
        })
        .attr("width", turretWidth_j)
        .attr("height", turretHeight_j)
        .style("fill", color_j)
        .duration(2500)

        // circle_0
        d3.select("#svg" + j)
        .select("#Porthole_0")
        .transition()
        .delay(200)
        .attr("cx", function() {
            return submarineWidth_rndIndex/2
        })
        .attr("cy", submarineHeight_rndIndex)
        .attr("r", portholeWidth_rndIndex)
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .select("#Porthole_0")
        .transition()
        .delay(200)
        .attr("cx", function() {
            return submarineWidth_j/2
        })
        .attr("cy", submarineHeight_j)
        .attr("r", portholeWidth_j)
        .duration(2500)

        // circle_1
        d3.select("#svg" + j)
        .select("#Porthole_1")
        .transition()
        .delay(200)
        .attr("cx", function() {
            return (submarineWidth_rndIndex/2)*2
        })
        .attr("cy", submarineHeight_rndIndex)
        .attr("r", portholeWidth_rndIndex)
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .select("#Porthole_1")
        .transition()
        .delay(200)
        .attr("cx", function() {
            return (submarineWidth_j/2)*2
        })
        .attr("cy", submarineHeight_j)
        .attr("r", portholeWidth_j)
        .duration(2500)

        // circle_2
        d3.select("#svg" + j)
        .select("#Porthole_2")
        .transition()
        .delay(200)
        .attr("cx", function() {
            return (submarineWidth_rndIndex/2) + submarineWidth_rndIndex
        })
        .attr("cy", submarineHeight_rndIndex)
        .attr("r", portholeWidth_rndIndex)
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .select("#Porthole_2")
        .transition()
        .delay(200)
        .attr("cx", function() {
            return (submarineWidth_j/2) + submarineWidth_j
        })
        .attr("cy", submarineHeight_j)
        .attr("r", portholeWidth_j)
        .duration(2500)

        // depth
        var coordY_j = coordinates[j].y
        var coordY_rndIndex = coordinates[rndIndex].y

        coordinates[j].y = coordY_rndIndex
        coordinates[rndIndex].y = coordY_j

        d3.select("#svg" + j)
        .transition()
        .delay(200)
        .attr("transform", function(){
            return "translate(" + coordinates[j].x + "," + coordY_rndIndex + ")"        
        })
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .transition()
        .delay(200)
        .attr("transform", function(){
            return "translate(" + coordinates[rndIndex].x + "," + coordY_j + ")"        
        })
        .duration(2500)

    })