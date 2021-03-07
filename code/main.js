/*Materialize carousel*/
M.AutoInit()
$(document).ready(function () {
    $('.carousel').carousel({
        numVisible: 1
    })
})
const prev = document.getElementById("prev")
const next = document.getElementById("next")
prev.addEventListener("click", () => {
    $('.carousel').carousel('prev')
})
next.addEventListener("click", () => {
    $('.carousel').carousel('next')
})

/*Animacije na ucitavanje stranice*/

window.addEventListener("load", () => {
    document.getElementById("floatIn").style.opacity = "1"
    document.getElementById("floatIn").style.marginTop = "7vh"
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
    }
    window.scrollTo({
        behavior: "smooth",
        top: 1
    });
})

/*Scrollanje do PC buildera na pritisak botuna*/

document.getElementById("pcBuilderBtn").addEventListener("click", () => {
    window.document.getElementById("builder").scrollIntoView({
        behavior: "smooth"
    })
})

/*Prevencija selektiranja kod brzog klikavanja*/

prev.addEventListener('mousedown', function (e) {
    e.preventDefault()
}, false)
next.addEventListener('mousedown', function (e) {
    e.preventDefault()
}, false)

/*Deklariranje varijabli*/

let addCpu = document.getElementById("addCpu")
let cpuSearch = document.getElementById("cpuSearch")

/* Konstruktorske funkcije*/

function CPU(brand, series, name, cores, threads, socket, tSize, tdp, baseGhz, boostGhz, graphics, score, oc, image, cooler, price) {
    this.brand = brand
    this.series = series
    this.name = name
    this.cores = cores
    this.threads = threads
    this.socket = socket
    this.tSize = tSize
    this.tdp = tdp
    this.baseGhz = baseGhz
    this.boostGhz = boostGhz
    this.graphics = graphics
    this.score = score
    this.oc = oc
    this.image = image
    this.cooler = cooler
    this.price = price
}

function Mothebroad(brand, name, socket, chipset, size, ramSlots, maxRamSpeed, wifi, nvme, sata, pci, pcie, image, price) {
    this.brand = brand
    this.name = name
    this.socket = socket
    this.chipset = chipset
    this.size = size
    this.ramSlots = ramSlots
    this.maxRamSpeed = maxRamSpeed
    this.wifi = wifi
    this.nvme = nvme
    this.sata = sata
    this.pci = pci
    this.pcie = pcie
    this.image = image
    this.price = price
}

function RAM(brand, name, capacity, speed, latency, stickNumber, image, price) {
    this.brand = brand
    this.name = name
    this.capacity = capacity
    this.speed = speed
    this.latency = latency
    this.stickNumber = stickNumber
    this.image = image
    this.price = price
}

function GPU(brand, series, gpu, name, vramCapacity, vramType, tdp, coreClock, boostClock, score, length, cooling, image, price) {
    this.brand = brand
    this.series = series
    this.gpu = gpu
    this.name = name
    this.vramCapacity = vramCapacity
    this.vramType = vramType
    this.tdp = tdp
    this.coreClock = coreClock
    this.boostClock = boostClock
    this.score = score
    this.length = length
    this.cooling = cooling
    this.image = image
    this.price = price
}

function HDD(brand, name, capacity, rpm, cache, image, price) {
    this.brand = brand
    this.name = name
    this.capacity = capacity
    this.rpm = rpm
    this.cache = cache
    this.image = image
    this.price = price
}

function SSD(brand, name, capacity, type, writeSpeed, readSpeed, cache, size, image, price) {
    this.brand = brand
    this.name = name
    this.capacity = capacity
    this.type = type
    this.writeSpeed = writeSpeed
    this.readSpeed = readSpeed
    this.cache = cache
    this.size = size
    this.image = image
    this.price = price
}

function PSU(brand, name, wattage, rating, modular, image, price) {
    this.brand = brand
    this.name = name
    this.wattage = wattage
    this.rating = rating
    this.modular = modular
    this.image = image
    this.price = price
}

function Case(brand, name, factor, maxGpu, maxCpuCooler, motherboardSupport, sidePanel, fanSize, fanMounts, includedFans, maxAIO, hddSlots, ssdSlots, image, price) {
    this.brand = brand
    this.name = name
    this.factor = factor
    this.maxGpu = maxGpu
    this.maxCpuCooler = maxCpuCooler
    this.motherboardSupport = motherboardSupport
    this.sidePanel = sidePanel
    this.fanSize = fanSize
    this.fanMounts = fanMounts
    this.includedFans = includedFans
    this.maxAIO = maxAIO
    this.hddSlots = hddSlots
    this.ssdSlots = ssdSlots
    this.image = image
    this.price = price
}

function StockCooler(brand, name, maxTdp, height, socket, image) {
    this.brand = brand
    this.name = name
    this.maxTdp = maxTdp
    this.height = height
    this.socket = socket
    this.image = image
}

function AirCooler(brand, name, socket, maxTdp, fans, height, image, price) {
    this.brane = brand
    this.name = name
    this.socket = socket
    this.maxTdp = maxTdp
    this.fans = fans
    this.height = height
    this.image = image
    this.price = price
}

function AIOCooler(brand, name, size, height, fans, image, price) {
    this.brand = brand
    this.name = name
    this.size = size
    this.height = height
    this.fans = fans
    this.image = image
    this.price = price
}

function CaseFan(brand, name, size, number, image, price) {
    this.brand = brand
    this.name = name
    this.size = size
    this.number = number
    this.image = image
    this.price = price
}

let CPUList = [new CPU("AMD", "Ryzen 3", "1200", 4, 4, "AM4", 14, 65, 3.1, 3.4, "Ne", 3749, "Da", "https://o.remove.bg/downloads/f7b65c5c-3b44-4341-b9ff-0ad0771577df/amd-ryzen-3-1200-prodajem-slika-128116989-removebg-preview.png", "Wraith Stealth", 460), new CPU("AMD", "Ryzen 3", "1300X", 4, 4, "AM4", 14, 65, 3.5, 3.7, "Ne", 3765, "Da", "https://o.remove.bg/downloads/16feee8a-3ade-4efa-8cdb-084d18c4c4ad/amd-ryzen-3-1200-prodajem-slika-128116989-removebg-preview.png", "Wraith Stealth", 500), new CPU("AMD", "Ryzen 3", "2200G", 4, 8, "AM4", 14, 65, 3.5, 3.7, "Radeon Vega 8", 3693, "Da", "https://o.remove.bg/downloads/375b3787-84ef-4d1a-a3eb-0e1976b267c4/amd-ryzen-3-2200g-socket-am4-procesor_25465dc0-removebg-preview.png", "Wraith Stealth", 600), new CPU("AMD", "Ryzen 3", "3200G", 4, 4, "AM4", 12, 65, 3.6, 4.0, "Radeon Vega 8", 3812, "Da", "https://o.remove.bg/downloads/0a157253-3340-43f5-ac8e-d8e9ddba4b00/amd-ryzen-3-3200g-socket-am4-procesor_99f1426-removebg-preview.png", "Wraith Stealth", 800), new CPU("AMD", "Ryzen 3", "3100", 4, 8, "AM4", 7, 65, 3.6, 3.9, "Ne", 5515, "Da", "https://o.remove.bg/downloads/f9b779a2-7527-4b9d-8f61-263c7ccde3b4/624041_117267_04_package_zoom-removebg-preview.png", "Wraith Stealth", 1170), new CPU("AMD", "Ryzen 3", "3300X", 4, 8, "AM4", 7, 65, 3.8, 4.3, "Ne", 6676, "Da", "https://o.remove.bg/downloads/07cb1359-414f-4fd1-9224-590a8aea5f97/image-removebg-preview.png", "Wraith Stealth", 1450), new CPU("AMD", "Ryzen 5", "1400", 4, 8, "AM4", 14, 65, 3.2, 3.4, "Ne", 4022, "Da", "https://o.remove.bg/downloads/7b23a93a-5fba-4c1b-ad76-ea51c464ef94/image-removebg-preview.png", "Wraith Stealth", 1000), new CPU("AMD", "Ryzen 5", "1500X", 4, 8, "AM4", 14, 65, 3.5, 3.7, "Ne", 4182, "Da", "https://o.remove.bg/downloads/7b23a93a-5fba-4c1b-ad76-ea51c464ef94/image-removebg-preview.png", "Wraith Spire", 1150), new CPU("AMD", "Ryzen 5", "1600AF", 6, 12, "AM4", 12, 65, 3.2, 3.6, "Ne", 5940, "Da", "https://o.remove.bg/downloads/7b23a93a-5fba-4c1b-ad76-ea51c464ef94/image-removebg-preview.png", "Wraith Spire", 940), new CPU("AMD", "Ryzen 5", "2400G", 4, 8, "AM4", 12, 65, 3.6, 3.9, "Radeon Vega 11", 3988, "Da", "https://o.remove.bg/downloads/24c6cd0d-4e72-4a34-9879-288fce57ed62/image-removebg-preview.png", "Wraith Spire", 1280), new CPU("AMD", "Ryzen 5", "3400G", 4, 8, "AM4", 7, 65, 3.7, 4.2, "Radeon Vega 11", 3882, "Da", "https://o.remove.bg/downloads/24c6cd0d-4e72-4a34-9879-288fce57ed62/image-removebg-preview.png", "Wraith Spire", 1700), new CPU("AMD", "Ryzen 5", "3500", 6, 6, "AM4", 7, 65, 3.6, 4.1, "Ne", 6484, "Da", "https://o.remove.bg/downloads/04e93cd3-c52f-4767-8956-eb03237b02b3/image-removebg-preview.png", "Wraith Spire", 1800), new CPU("AMD", "Ryzen 5", "3600", 6, 12, "AM4", 7, 65, 3.6, 4.2, "Ne", 8556, "Da", "https://o.remove.bg/downloads/04e93cd3-c52f-4767-8956-eb03237b02b3/image-removebg-preview.png", "Wraith Stealth", 1530), new CPU("AMD", "Ryzen 7", "1700X", 8, 16, "AM4", 14, 95, 3.4, 3.8, "Ne", 7435, "Da", "https://o.remove.bg/downloads/53281a2f-6fa8-4403-abc2-7f5cb143d970/image-removebg-preview.png", "Ne", 1500), new CPU("AMD", "Ryzen 7", "1800X", 8, 16, "AM4", 14, 95, 3.6, 4.0, "Ne", 7893, "Da", "https://o.remove.bg/downloads/73c7089f-ba43-4ff9-9d43-9cc25553f260/image-removebg-preview.png", "Ne", 1700), new CPU("AMD", "Ryzen 7", "2700X", 8, 16, "AM4", 12, 105, 3.7, 4.3, "Ne", 8604, "Da", "https://o.remove.bg/downloads/53281a2f-6fa8-4403-abc2-7f5cb143d970/image-removebg-preview.png", "Wraith Prism RGB", 1650), new CPU("AMD", "Ryzen 7", "3700X", 8, 16, "AM4", 7, 65, 3.6, 4.4, "Ne", 9893, "Da", "https://o.remove.bg/downloads/0347ec6f-f8ea-4b85-a01d-ed9a1932eca3/608318_952036_01_front_zoom-removebg-preview.png", "Wraith Prism RGB", 2400), new CPU("AMD", "Ryzen 7", "3800X", 8, 16, "AM4", 7, 105, 3.9, 4.5, "Ne", 10099, "Da", "https://o.remove.bg/downloads/0347ec6f-f8ea-4b85-a01d-ed9a1932eca3/608318_952036_01_front_zoom-removebg-preview.png", "Wraith Prism RGB", 2600), new CPU("AMD", "Ryzen 9", "3900X", 12, 24, "AM4", 7, 105, 3.8, 4.6, "Ne", 11291, "Da", "https://o.remove.bg/downloads/51178b6e-46dc-4983-8668-0f912d7f4244/s-l640-removebg-preview.png", "Wraith Prism RGB", 3600), new CPU("AMD", "Ryzen 9", "3950X", 16, 32, "AM4", 7, 105, 3.5, 4.7, "Ne", 13944, "Da", "https://o.remove.bg/downloads/00f6286c-6f25-43aa-9381-a542a9999314/unnamed-removebg-preview.png", "Ne", 5500), new CPU("AMD", "Ryzen Threadripper", "1900x", 8, 16, "AM4", 14, 180, 3.8, 4.0, "Ne", 8332, "Da", "https://www.consolekillerpc.co.uk/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/1/9/1900x.png", "Ne", 1150), new CPU("AMD", "Ryzen Threadripper", "1920x", 12, 24, "AM4", 14, 180, 3.5, 4.0, "Ne", 8978, "Da", "https://o.remove.bg/downloads/d467f5a3-a1ad-412a-a4bd-999ef484fb23/im_23065-removebg-preview.png", "Ne", 1400), new CPU("Intel", "Core I3", "9100F", 4, 4, "LGA1151", 14, 65, 3.6, 4.2, "Ne", 4142, "Ne", "https://o.remove.bg/downloads/23e35918-9c5a-46f8-9ae0-f5dca3e8a9f9/procesador_intel_core_i3-9100f_3_6_ghz_box_01_l-removebg-preview.png", "Intel PCG 2015C", 630)]


/*Dodavanje komponenata u modal*/

for (var i = 0; i < CPUList.length; i++) {
    addCpu.innerHTML += (
        `<div class="row pc-part" id="cpu${i+1}">
            <div class="col s2 m2 l2">
                <img src="${CPUList[i].image}" class="responsive-img">
            </div>
            <hr>
            <div class="col s10 m10 l10 row center-align">    
                <p class="comp-modal-text flow-text id="cpuName${i+1}">${CPUList[i].brand+" "+CPUList[i].series+" "+CPUList[i].name}</p>
                <div class="col s4 m2 l2">
                    <p class="comp-modal-text flow-text">Socket:<br>${CPUList[i].socket}</p>
                </div>
                <div class="col s4 m2 l2">
                    <p class="comp-modal-text flow-text">Velicina transistora:<br>${CPUList[i].tSize}nm</p>
                </div>
                <div class="col s4 m2 l2">
                    <p class="comp-modal-text flow-text">Snaga:<br>${CPUList[i].tdp}W</p>
                </div>
                <div class="col s4 m2 l2">
                    <p class="comp-modal-text flow-text">Brzina:<br>${CPUList[i].baseGhz}GHz-${CPUList[i].boostGhz}GHz</p>
               </div>
                <div class="col s4 m2 l2">
                    <p class="comp-modal-text flow-text">Intergrirana grafika:<br>${CPUList[i].graphics}</p>
                </div>
                <div class="col s4 m2 l2">
                    <p class="comp-modal-text flow-text">Performansa:<br>${CPUList[i].score}</p>
                </div>
                <div class="col s4 m2 l2">
                    <p class="comp-modal-text flow-text">Mogucnost OC:<br>${CPUList[i].oc}</p>
                </div>
                <div class="col s4 m2 l2">
                    <p class="comp-modal-text flow-text">Dolazi s hladnjakom:<br>${CPUList[i].cooler}</p>
                </div>
                <div class="col s4 m2 l2">
                <p class="comp-modal-text flow-text">Cijena:<br>${CPUList[i].price}kn</p>
                </div>
        </div>`)
    document.getElementById("cpu" + (i + 1)).addEventListener("click", () => {
        document.getElementById("c-cpu").innerHTML = `
        <p class="comp-text center-align flow-text">${CPUList[i].brand+" "+CPUList[i].series+" "+CPUList[i].name}</p>
        <img src="${CPUList[i].image}" class="responsive-img">`
    })
}

/*Seacrh funkcije*/

function Search() {
    console.log("Radi")
    for (let i = 1; i <= CPUList.length; i++) {
        if (document.getElementById("cpuName" + i).innerHTML.includes(cpuSearch.value) === true) {
            document.getElementById("cpuName" + i).parentElement.parentElement.style.display = "block"
            return document.getElementById(" cpuName" + i).innerHTML + " :1"
        } else if (cpuSearch.value = "") {
            document.getElementById("cpuName" + i).parentElement.parentElement.style.display = "block"
            return "Empty search value"
        } else {
            document.getElementById("cpuName" + i).parentElement.parentElement.style.display = "none"
            return document.getElementById("cpuName" + String(i)).innerHTML + " :0"
        }
    }
}

cpuSearch.addEventListener("keyup", (Search))