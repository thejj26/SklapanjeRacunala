//Materialize carousel
M.AutoInit()

$(document).ready(function () { //Broj vidljivih komponenata smanjen na 1(kopirano s Githuba)
    $(".carousel").carousel({
        numVisible: 1
    })
})

const prev = document.getElementById("prev") //Listanje po carouselu
const next = document.getElementById("next")

prev.addEventListener("click", () => {
    $(".carousel").carousel("prev")
})

next.addEventListener("click", () => {
    $(".carousel").carousel("next")
})

//Animacije na ucitavanje stranice
window.addEventListener("load", () => {

    document.getElementById("floatIn").style.opacity = "1" //Animacije
    document.getElementById("floatIn").style.marginTop = "7vh"

    if ("scrollRestoration" in window.history) { //Bez ovoga ima problema sa scrollanjem
        window.history.scrollRestoration = "manual"
    }
    window.scrollTo({
        behavior: "smooth",
        top: 1
    })
})

//Scrollanje do PC buildera na pritisak botuna
document.getElementById("pcBuilderBtn").addEventListener("click", () => {
    window.document.getElementById("next").scrollIntoView({
        behavior: "smooth"
    })
})

//Prevencija selektiranja kod brzog klikavanja
prev.addEventListener('mousedown', function (e) {
    e.preventDefault()
}, false)

next.addEventListener('mousedown', function (e) {
    e.preventDefault()
}, false)

//Brisanje searchbar vrijednosti na zatvaranje modala

document.addEventListener('DOMContentLoaded', function () { //EventListener slusa zatvaranje modala te brise search value

    var elems = document.querySelectorAll('.modal')
    var instances = M.Modal.init(elems, {

        onCloseEnd: function () {
            cpuSearch.value = ""
            Search(cpuSearch, cpuList.length, "cpuName") //Search() funkcija se poziva da bi se sve komponente opet prikazale(jer je search value prazan)
            coolerSearch.value = ""
            Search(coolerSearch, coolerList.length - 4, "coolerName")
            mbSearch.value = ""
            Search(mbSearch, mbList.length, "mbName")
            ramSearch.value = ""
            Search(ramSearch, ramList.length, "ramName")
            gpuSearch.value = ""
            Search(gpuSearch, gpuList.length, "gpuName")
            storageSearch.value = ""
            psuSearch.value = ""
            caseSearch.value = ""
            fanSearch.value = ""
        }
    })
})

//Konstruktorske funkcije
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

function Mothebroad(brand, name, socket, chipset, size, ramSlots, maxRamSpeed, nvme, sata, pci, pcie, image, price) {
    this.brand = brand
    this.name = name
    this.socket = socket
    this.chipset = chipset
    this.size = size
    this.ramSlots = ramSlots
    this.maxRamSpeed = maxRamSpeed
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

function GPU(brand, series, gpu, vramCapacity, vramType, tdp, coreClock, boostClock, score, image, price) {
    this.brand = brand
    this.series = series
    this.gpu = gpu
    this.vramCapacity = vramCapacity
    this.vramType = vramType
    this.tdp = tdp
    this.coreClock = coreClock
    this.boostClock = boostClock
    this.score = score
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

function SSD(brand, name, capacity, type, writeSpeed, readSpeed, image, price) {
    this.brand = brand
    this.name = name
    this.capacity = capacity
    this.type = type
    this.writeSpeed = writeSpeed
    this.readSpeed = readSpeed
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

function StockCooler(brand, name, image, price) {
    this.brand = brand
    this.name = name
    this.image = image
    this.price = price
}

function AirCooler(brand, name, socket, fans, size, image, price) {
    this.brand = brand
    this.name = name
    this.socket = socket
    this.fans = fans
    this.size = size
    this.image = image
    this.price = price
}

function AIOCooler(brand, name, socket, fans, size, image, price) {
    this.brand = brand
    this.name = name
    this.socket = socket
    this.fans = fans
    this.size = size
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

//Izabrane komponente
let finalCpu = null
let finalCooler = null
let finalMb = null
let finalRam = null
let finalGpu = null
let finalStorage = null
let finalPsu = null
let finalCase = null
let finalFans = null

//Liste komponenti
let cpuList = [
    new CPU("AMD", "Ryzen 3", "1200", 4, 4, "AM4", 14, 65, 3.1, 3.4, "Ne", 3749, "Da", "https://www.amd.com/system/files/24301-ryzen-3-pib-right-facing-1260x709_1.png", "Wraith Stealth", 460),
    new CPU("AMD", "Ryzen 3", "1300X", 4, 4, "AM4", 14, 65, 3.5, 3.7, "Ne", 3765, "Da", "https://www.amd.com/system/files/24301-ryzen-3-pib-left-facing-1260x709_2.png", "Wraith Stealth", 500),
    new CPU("AMD", "Ryzen 3", "2200G", 4, 8, "AM4", 14, 65, 3.5, 3.7, "Radeon Vega 8", 3693, "Da", "https://www.amd.com/system/files/82446-raven-am4-ryzen-3-pib-left-facing-1260x709.png", "Wraith Stealth", 600),
    new CPU("AMD", "Ryzen 3", "3200G", 4, 4, "AM4", 12, 65, 3.6, 4.0, "Radeon Vega 8", 3812, "Da", "https://www.amd.com/system/files/2019-06/238593-ryzen-3-vega-pib-left-facing-1260x709_0.png", "Wraith Stealth", 800),
    new CPU("AMD", "Ryzen 3", "3100", 4, 8, "AM4", 7, 65, 3.6, 3.9, "Ne", 5515, "Da", "https://i.imgur.com/Q82AAHM.png", "Wraith Stealth", 1170),
    new CPU("AMD", "Ryzen 3", "3300X", 4, 8, "AM4", 7, 65, 3.8, 4.3, "Ne", 6676, "Da", "https://www.amd.com/system/files/2020-04/450000-ryzen3-3rd-gen-pib-1260x709_0.png", "Wraith Stealth", 1450),
    new CPU("AMD", "Ryzen 5", "1400", 4, 8, "AM4", 14, 65, 3.2, 3.4, "Ne", 4022, "Da", "https://www.nabava.net/slike/products/41/53/4185341/amd-ryzen-5-1600_fb570d24.png", "Wraith Stealth", 1000),
    new CPU("AMD", "Ryzen 5", "1500X", 4, 8, "AM4", 14, 65, 3.5, 3.7, "Ne", 4182, "Da", "https://www.nabava.net/slike/products/41/53/4185341/amd-ryzen-5-1600_fb570d24.png", "Wraith Spire", 1150),
    new CPU("AMD", "Ryzen 5", "1600AF", 6, 12, "AM4", 12, 65, 3.2, 3.6, "Ne", 5940, "Da", "https://www.nabava.net/slike/products/41/53/4185341/amd-ryzen-5-1600_fb570d24.png", "Wraith Spire", 940),
    new CPU("AMD", "Ryzen 5", "2400G", 4, 8, "AM4", 12, 65, 3.6, 3.9, "Radeon Vega 11", 3988, "Da", "https://i.imgur.com/bTLZWAY.png", "Wraith Spire", 1280),
    new CPU("AMD", "Ryzen 5", "3400G", 4, 8, "AM4", 7, 65, 3.7, 4.2, "Radeon Vega 11", 3882, "Da", "https://www.amd.com/system/files/2019-07/238593-ryzen-5G-pib-right-facing-1260x709.png", "Wraith Spire", 1700),
    new CPU("AMD", "Ryzen 5", "3500", 6, 6, "AM4", 7, 65, 3.6, 4.1, "Ne", 6484, "Da", "https://i.imgur.com/VUgKNMA.png", "Wraith Spire", 1800),
    new CPU("AMD", "Ryzen 5", "3600", 6, 12, "AM4", 7, 65, 3.6, 4.2, "Ne", 8556, "Da", "https://i.imgur.com/zebYHd3.png", "Wraith Stealth", 1530),
    new CPU("AMD", "Ryzen 7", "1700X", 8, 16, "AM4", 14, 95, 3.4, 3.8, "Ne", 7435, "Da", "https://i.imgur.com/HKPlWvx.png", "Ne", 1500),
    new CPU("AMD", "Ryzen 7", "1800X", 8, 16, "AM4", 14, 95, 3.6, 4.0, "Ne", 7893, "Da", "https://i.imgur.com/zN8oTZJ.png", "Ne", 1700),
    new CPU("AMD", "Ryzen 7", "2700X", 8, 16, "AM4", 12, 105, 3.7, 4.3, "Ne", 8604, "Da", "https://i.imgur.com/cVDGKbK.png", "Wraith Prism RGB", 1650),
    new CPU("AMD", "Ryzen 7", "3700X", 8, 16, "AM4", 7, 65, 3.6, 4.4, "Ne", 9893, "Da", "https://i.imgur.com/v537x3P.png", "Wraith Prism RGB", 2400),
    new CPU("AMD", "Ryzen 7", "3800X", 8, 16, "AM4", 7, 105, 3.9, 4.5, "Ne", 10099, "Da", "https://i.imgur.com/v537x3P.png", "Wraith Prism RGB", 2600),
    new CPU("AMD", "Ryzen 9", "3900X", 12, 24, "AM4", 7, 105, 3.8, 4.6, "Ne", 11291, "Da", "https://i.imgur.com/CoVVmP0.png", "Wraith Prism RGB", 3600),
    new CPU("AMD", "Ryzen 9", "3950X", 16, 32, "AM4", 7, 105, 3.5, 4.7, "Ne", 13944, "Da", "https://i.imgur.com/rvf1F9V.png", "Ne", 5500),
    new CPU("Intel", "Core I3", "9100F", 4, 4, "LGA1151", 14, 65, 3.6, 4.2, "Ne", 4142, "Ne", "https://i.imgur.com/6plqcni.png", "PCG 2015C", 630),
    new CPU("Intel", "Core I3", "9300", 4, 4, "LGA1151", 14, 62, 3.7, 4.3, "Intel® UHD Graphics 630", 4666, "Ne", "https://i.imgur.com/6plqcni.png", "PCG 2015C", 950),
    new CPU("Intel", "Core I5", "9400F", 6, 6, "LGA1151", 14, 65, 2.9, 4.1, "Ne", 6174, "Ne", "https://i.imgur.com/nITW0iY.png", "PCG 2015C", 1000),
    new CPU("Intel", "Core I5", "9500F", 6, 6, "LGA1151", 14, 65, 3.0, 4.4, "Ne", 6066, "Ne", "https://i.imgur.com/nITW0iY.png", "PCG 2015C", 1280),
    new CPU("Intel", "Core I5", "9600KF", 6, 6, "LGA1151", 14, 95, 3.7, 4.6, "Ne", 8336, "Da", "https://i.imgur.com/W2Q7KmA.png", "Ne", 1300),
    new CPU("Intel", "Core I7", "9700", 8, 8, "LGA1151", 14, 65, 3.0, 4.7, "Intel® UHD Graphics 630", 8563, "Ne", "https://i.imgur.com/wEC905z.png", "PCG 2015C", 1800),
    new CPU("Intel", "Core I9", "9900K", 8, 16, "LGA1151", 14, 95, 3.6, 5.0, "Ne", 12943, "Da", "https://i.imgur.com/3wreTO7.png", "Ne", 2850),
]

let coolerList = [
    new StockCooler("AMD", "Wraith Stealth", "https://i.imgur.com/IAZGt46.png", 0),
    new StockCooler("AMD", "Wraith Spire", "https://i.imgur.com/ZXq2TPA.png", 0),
    new StockCooler("AMD", "Wraith Prism RGB", "https://i.imgur.com/Hi2n8SZ.png", 0),
    new StockCooler("Intel", "PCG 2015C", "https://matrixwarehouse.co.za/wp-content/uploads/2019/06/BX80684G5400-01.png", 0),
    new AirCooler("Arctic", "Freezer 7X", "LGA1151/AM4", 1, 90, "https://i.imgur.com/KRMcBhn.png", 140),
    new AirCooler("be quiet!", "Pure Rock Slim", "LGA1151/AM4", 1, 92, "https://i.imgur.com/lKE73cb.png", 200),
    new AirCooler("Arctic", "Freezer 34 CO", "LGA1151/AM4", 1, 120, "https://i.imgur.com/JmCo3ws.png", 240),
    new AirCooler("Zalman", "CNPS10X Optima II", "LGA1151/AM4", 1, 120, "https://i.imgur.com/DvN42cz.png", 270),
    new AirCooler("Arctic", "Freezer 34 eSports DUO", "LGA1151/AM4", 2, 120, "https://i.imgur.com/0qVIUG6.png", 350),
    new AirCooler("CoolerMaster", "Hyper 212 RGB", "LGA1151/AM4", 1, 160, "https://i.imgur.com/9Ff32E4.png", 365),
    new AIOCooler("Coolermaster", "MasterLiquid 120 Lite", "LGA1151/AM4", 120, 1, "https://www.nabava.net/slike/products/65/87/4568765/thumb290_cooler-master-vodeno-hladenje-masterliquid-lite-120-mlw-d12m-a20pw-r1_1a2b8fa0.png", 370),
    new AIOCooler("CoolerMaster", "MasterLiquid 240 Lite", "LGA1151/AM4", 240, 2, "https://i.imgur.com/CmQWIU6.png", 420),
    new AIOCooler("Corsair", "Hydro H45", "LGA1151/AM4", 1, 120, "https://www.corsair.com/medias/sys_master/images/images/h62/haa/9110014754846/-CW-9060028-WW-Gallery-H45-01.png", 430),
    new AirCooler("Noctua", "NH-U9DX i4", "LGA1151/AM4", 2, 90, "https://i.imgur.com/ygWDISI.png", 550),
    new AIOCooler("Arctic", "Liquid Freezer II", "LGA1151/AM4", 2, 240, "https://i.imgur.com/CaxUP9e.png", 660),
    new AirCooler("Noctua", "NH-U12A", "LGA1151/AM4", 2, 120, "https://i.imgur.com/v7GOpdS.png", 800),
    new AIOCooler("MSI", "Coreliquid 360R", "LGA1151/AM4", 3, 360, "https://i.imgur.com/qh8lhnJ.png", 1200),
    new AIOCooler("Corsair", "iCue H150i ELITE CAPPELIX", "LGA1151/AM4", 3, 360, "https://i.imgur.com/MWn6zS0.png", 1580),

]

let mbList = [
    new Mothebroad("MSI", "A320M-A PRO", "AM4", "A320", "mATX", 2, 3200, 0, 4, 1, 1, "https://asset.msi.com/resize/image/global/product/product_5_20190729160213_5d3ea805c460e.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", 350),
    new Mothebroad("Gigabyte", "A320M-H", "AM4", "A320", "mATX", 2, 3200, 1, 4, 2, 1, "https://static.gigabyte.com/StaticFile/Image/Global/509446198742ff412d8c2d4dcd7df8e7/Product/20311/png/500", 400),
    new Mothebroad("AsRock", "A320M-H Pro4-F", "AM4", "A320", "mATX", 4, 3200, 2, 4, 1, 2, "https://i.imgur.com/fJoNehz.png", 530),
    new Mothebroad("MSI", "B350M Pro-VD Plus", "AM4", "B350", "mATX", 2, 3200, 0, 4, 2, 1, "https://asset.msi.com/resize/image/global/product/product_10_20170614143312_5940d8a8e0b2f.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", 480),
    new Mothebroad("AsRock", "AB350M Pro4-F", "AM4", "B350", "mATX", 4, 3200, 2, 4, 1, 2, "https://i.imgur.com/fJoNehz.png", 530),
    new Mothebroad("AsRock", "AB350 Gaming K4", "AM4", "B350", "ATX", 4, 3200, 2, 6, 4, 2, "https://www.asrock.com/mb/photo/Fatal1ty%20AB350%20Gaming%20K4(L4).png", 630),
    new Mothebroad("Gigabyte", "B450M H", "AM4", "B450", "mATX", 2, 3600, 1, 4, 2, 1, "https://static.gigabyte.com/StaticFile/Image/Global/b13021ab933b933336876c73ab6ba644/Product/24294/png/500", 470),
    new Mothebroad("Asus", "PRIME B450M-K II", "AM4", "B450", "mATX", 2, 4400, 1, 4, 2, 1, "https://dlcdnwebimgs.asus.com/gain/ae050c7e-abbf-4794-bd1d-c26cd19aa183/w800", 530),
    new Mothebroad("Gigabyte", "B450 Aorus Elite V2", "AM4", "B450", "ATX", 4, 3600, 2, 6, 2, 2, "https://static.gigabyte.com/StaticFile/Image/Global/8bdb4bae8b1a28b6daaa5cbe29b91ed2/Product/25864/png/500", 700),
    new Mothebroad("AsRock", "B550M-HDV", "AM4", "B550", "mATX", 2, 4600, 1, 4, 1, 1, "https://www.asrock.com/mb/photo/B550M-HDV(L2).png", 700),
    new Mothebroad("AsRock", "B550 Phantom Gaming 4", "AM4", "B550", "ATX", 4, 4533, 2, 6, 2, 2, "https://www.asrock.com/mb/photo/B550%20Phantom%20Gaming%204(L4).png", 760),
    new Mothebroad("Asus", "ROG STRIX B550-F Gaming", "AM4", "B550", "ATX", 4, 5100, 2, 6, 3, 2, "https://rog.asus.com/websites/global/products/uri12btqafuvwte6/img/kv/pd.png", 1300),
    new Mothebroad("AsRock", "X370M-HDV", "AM4", "X370", "mATX", 2, 3200, 1, 4, 1, 1, "https://www.asrock.com/mb/photo/X370M-HDV(L3).png", 480),
    new Mothebroad("Gigabyte", "GA-X370-K3", "AM4", "X370", "ATX", 4, 3200, 1, 8, 3, 2, "https://static.gigabyte.com/StaticFile/Image/Global/5ce3dfa453c6089bb738a3e45db8d679/Product/16930/png/500", 950),
    new Mothebroad("MSI", "X470 Gaming Plus Max", "AM4", "X470", "ATX", 4, 4133, 2, 6, 3, 3, "https://asset.msi.com/resize/image/global/product/product_8_20190717174039_5d2eed176ce56.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", 770),
    new Mothebroad("Asus", "TUF X470-PLUS GAMING", "AM4", "X470", "ATX", 4, 3466, 3, 6, 3, 2, "https://www.asus.com/media/global/gallery/OGtnBg0jfcUMHyHS_setting_xxx_0_90_end_800.png", 1100),
    new Mothebroad("Gigabyte", "X570 GAMING X", "AM4", "X570", "ATX", 4, 4733, 2, 6, 3, 2, "https://static.gigabyte.com/StaticFile/Image/Global/91a7aca44388c13f1762a98b367e5c3f/Product/22137/webp/1000", 1200),
    new Mothebroad("AsRock", "X570 Extreme4", "AM4", "X570", "ATX", 4, 4666, 2, 8, 3, 2, "https://www.asrock.com/mb/photo/X570%20Extreme4(L3).png", 1830),
    new Mothebroad("Gigabyte", "H310M-H", "LGA1151", "H310", "mATX", 2, 2666, 0, 4, 2, 1, "https://static.gigabyte.com/StaticFile/Image/Global/a4d2776938d10d8728980b6c3474f9ef/Product/19321/png/500", 380),
    new Mothebroad("AsRock", "H370M-HDV", "LGA1151", "H370", "mATX", 2, 2666, 0, 4, 1, 1, "http://tw.asrock.com/mb/photo/H370M-HDV(L2).png", 480),
    new Mothebroad("Asus", "PRIME B360M-A", "LGA1151", "B360", "mATX", 2, 2666, 1, 6, 2, 1, "https://www.asus.com/media/global/gallery/PKubhjDnP6TvgsGp_setting_xxx_0_90_end_1000.png", 570),
    new Mothebroad("Gigabyte", "B365 HD3", "LGA1151", "B365", "ATX", 2, 2666, 1, 6, 2, 2, "https://static.gigabyte.com/StaticFile/Image/Global/386659f071e830af878bd84a1fd9aaee/Product/21689/png/500", 620),
    new Mothebroad("AsRock", "Z370 Pro4", "LGA1151", "Z370", "ATX", 4, 4266, 2, 6, 3, 3, "https://www.asrock.com/mb/photo/Z370%20Pro4(L2).png", 860),
    new Mothebroad("Gigabyte", "Z390M", "LGA1151", "Z390", "mATX", 4, 4266, 2, 6, 2, 2, "https://static.gigabyte.com/StaticFile/Image/Global/2b359ba50141dfb9389235d008dd7ffb/Product/20778/png/500", 910)
]

let ramList = [
    new RAM("G.Skill", "Value 4GB", 4, 2133, 15, 1, "https://i.imgur.com/Y8x8iXI.png", 190),
    new RAM("G.Skill", "Ripjaws V 4GB", 4, 2400, 17, 1, "https://i.imgur.com/kIa3zhH.png", 210),
    new RAM("Patriot", "Signature 4GB", 4, 2666, 19, 1, "https://i.imgur.com/lPTItgY.png", 180),
    new RAM("Kingston", "HyperX Fury 4GB", 4, 3000, 15, 1, "https://i.imgur.com/Cs2qLsn.png", 230),
    new RAM("Corsair", "Value Select 8GB", 8, 2133, 15, 1, "https://i.imgur.com/u1OYP7a.png", 410),
    new RAM("G.SKill", "Aegis 8GB", 8, 2133, 15, 2, "https://i.imgur.com/0hVprBh.png", 390),
    new RAM("Corsair", "Vengance LPX 8GB", 8, 2400, 14, 1, "https://www.corsair.com/medias/sys_master/images/images/h9b/haf/9110351904798/-CMK8GX4M1A2400C14-Gallery-VENG-LPX-BLK-01.png", 360),
    new RAM("Geil", "Super Luce RGB TUF 8GB", 8, 2400, 16, 2, "https://i.imgur.com/tYJm3nU.png", 340),
    new RAM("Patriot", "Viper Steel 8GB", 8, 3000, 16, 1, "https://i.imgur.com/XPonu5F.png", 300),
    new RAM("G.Skill", "Ripjaws V 8GB", 8, 3000, 15, 2, "https://i.imgur.com/npwYb36.png", 400),
    new RAM("Thermaltake", "Toughram Z-One 8GB", 8, 3600, 18, 1, "https://i.imgur.com/HmjqRrC.png", 430),
    new RAM("Adata", "Gammix D30 8GB", 8, 3600, 19, 2, "https://i.imgur.com/5fXh5qd.png", 390),
    new RAM("G.Skill", "Aegis 16GB", 16, 2400, 17, 1, "https://i.imgur.com/RAjRLzd.png", 550),
    new RAM("Crucial", "Ballistix 16GB", 16, 2400, 19, 2, "https://i.imgur.com/TqD5wWV.png", 630),
    new RAM("Kingston", "HyperX Fury 16GB", 16, 3000, 15, 4, "https://i.imgur.com/DHI8uHm.png", 840),
    new RAM("Corsair", "Vengance LPX 16GB", 16, 3000, 16, 1, "https://www.corsair.com/medias/sys_master/images/images/h9b/haf/9110351904798/-CMK8GX4M1A2400C14-Gallery-VENG-LPX-BLK-01.png", 640),
    new RAM("Patriot", "Viper 4 16GB", 16, 3000, 16, 2, "https://i.imgur.com/RH6IKJj.png", 630),
    new RAM("Kingston", "HyperX Fury 16GB", 16, 3200, 16, 1, "https://i.imgur.com/skLtyOC.png", 620),
    new RAM("G.SKill", "Sniper X 16GB", 16, 3200, 16, 2, "https://i.imgur.com/CJUEFgZ.png", 700),
    new RAM("Kingston", "HyperX Fury 16GB", 16, 3600, 18, 1, "https://i.imgur.com/Wy47BOw.png", 670),
    new RAM("Corsair", "Vengance LPX 16GB", 16, 3600, 16, 2, "https://www.nabava.net/slike/products/27/66/11566627/thumb290_corsair-vengeance-lpx-16gb-ddr4-3600mhz-cmk16gx4m2d3600c18-2x8gb_33d20b9d.png", 730),
    new RAM("Patriot", "Viper Steel 16GB", 16, 4000, 16, 4, "https://i.imgur.com/l8cO1wl.png", 1000),
    new RAM("Corsair", "Vengance LPX 32GB", 32, 2400, 15, 2, "https://www.nabava.net/slike/products/27/66/11566627/thumb290_corsair-vengeance-lpx-16gb-ddr4-3600mhz-cmk16gx4m2d3600c18-2x8gb_33d20b9d.png", 1340),
    new RAM("G.Skill", "Ripjaws 4 32GB", 32, 2400, 15, 4, "https://i.imgur.com/uXVJSL1.png", 1180),
    new RAM("Crucial", "Ballistix Red 32GB", 32, 3200, 16, 1, "https://i.imgur.com/mszOqml.png", 1280),
    new RAM("G.Skill", "Ripjaws V 32GB", 32, 3200, 16, 2, "https://i.imgur.com/yJAEY4a.png", 1250),
    new RAM("Kingston", "HyperX Fury RGB 32GB", 32, 3200, 16, 4, "https://i.imgur.com/7BCGRRu.png", 1500),
    new RAM("Kingston", "HyperX Predator 32GB", 32, 3600, 18, 1, "https://i.imgur.com/wZOxs58.png", 1610),
    new RAM("Patriot", "Viper RGB 32GB", 32, 3600, 18, 2, "https://i.imgur.com/g3wdGPS.png", 1520),
    new RAM("G.Skill", "Ripjaws V 64GB", 64, 2666, 18, 2, "https://i.imgur.com/YvhnDSN.png", 3120),
    new RAM("Kingston", "HyperX Predator 64GB", 64, 2666, 18, 4, "https://i.imgur.com/OvAN9a7.png", 2680),
    new RAM("Patriot", "Viper Blackout 64GB", 64, 3200, 19, 2, "https://i.imgur.com/ntfJmy2.png", 2450),
    new RAM("G.Skill", "Flare X 64GB", 64, 3200, 16, 4, "https://i.imgur.com/zzaaUXH.png", 2750),
    new RAM("Patriot", "Viper Steel 64GB", 64, 3600, 16, 2, "https://i.imgur.com/48mm3e6.png", 2720),
    new RAM("G.Skill", "Trident Z Neo 64GB", 64, 3600, 18, 4, "https://i.imgur.com/AMZ2t1h.png", 3600),
]

let gpuList = [
    new GPU("Nvidia", "GTX", "1650", 4, "GDDR6", 75, 1410, 1590, 3611, "https://i.imgur.com/SztB2wj.png", 980),
    new GPU("Nvidia", "GTX", "1650 Super", 4, "GDDR6", 100, 1530, 1725, 4799, "https://i.imgur.com/SztB2wj.png", 1050),
    new GPU("Nvidia", "GTX", "1660", 6, "GDDR5", 95, 1530, 1785, 5513, "https://i.imgur.com/h4XUEKD.png", 1410),
    new GPU("Nvidia", "GTX", "1660 Super", 6, "GDDR6", 125, 1530, 1785, 6127, "https://i.imgur.com/GnbvBVZ.png", 1500),
    new GPU("Nvidia", "GTX", "1660 Ti", 6, "GDDR6", 125, 1500, 1770, 6341, "https://i.imgur.com/55kdhOv.png", 1800),
    new GPU("Nvidia", "RTX", "2060", 6, "GDDR6", 160, 1365, 1680, 7422, "https://i.imgur.com/DecksZp.png", 2250),
    new GPU("Nvidia", "RTX", "2060 Super", 8, "GDDR6", 175, 1470, 1660, 8482, "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/rtx-2060-super/geforce-rtx-2060-super-shop-P@2x.png", 2570),
    new GPU("Nvidia", "RTX", "2070", 8, "GDDR6", 185, 1410, 1710, 8704, "https://i.imgur.com/p17UltL.png", 3210),
    new GPU("Nvidia", "RTX", "2070 Super", 8, "GDDR6", 215, 1605, 1770, 9835, "https://i.imgur.com/arwfYif.png", 3420),
    new GPU("Nvidia", "RTX", "2080", 8, "GDDR6", 225, 1515, 1800, 10474, "https://i.imgur.com/1quXlxP.png", 4500),
    new GPU("Nvidia", "RTX", "2080 Super", 8, "GDDR6", 250, 1650, 1815, 11189, "https://i.imgur.com/87xxBFj.png", 4830),
    new GPU("Nvidia", "RTX", "2080 Ti", 11, "GDDR6", 260, 1350, 1635, 13562, "https://hexus.net/media/uploaded/2018/9/14041b14-b2dd-470c-8cd6-dd71aaaf42fa.png", 6430),
    new GPU("Nvidia", "Titan", "RTX", 24, "GDDR6", 280, 1365, 1770, 14409, "https://i.imgur.com/KYr1j8G.png", 16080),
    new GPU("Nvidia", "RTX", "3060", 11, "GDDR6", 170, 1320, 1780, 6452, "https://i.imgur.com/LYhu1Fx.png", 2120),
    new GPU("Nvidia", "RTX", "3060 Ti", 8, "GDDR6", 200, 1410, 1670, 9902, "https://i.imgur.com/US4dLWk.png", 2600),
    new GPU("Nvidia", "RTX", "3070", 8, "GDDR6", 220, 1500, 1730, 10489, "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3070/geforce-rtx-3070-shop-600-p@2x.png", 3210),
    new GPU("Nvidia", "RTX", "3080", 10, "GDDR6", 320, 1440, 1710, 13903, "https://i.imgur.com/mvaTQqE.png", 4500),
    new GPU("Nvidia", "RTX", "3090", 24, "GDDR6", 350, 1400, 1700, 15302, "https://i.imgur.com/DxLNSuj.png", 9650),
    new GPU("AMD", "Radeon RX", "5500 XT (4GB)", 4, "GDDR6", 130, 1717, 1845, 4965, "https://www.amd.com/system/files/styles/992px/private/2019-10/310557-amd-radeon-rx-5500-graphics-card-1260x709.png?itok=9K6xt5bL", 1070),
    new GPU("AMD", "Radeon RX", "5500 XT (8GB)", 8, "GDDR6", 130, 1717, 1845, 4965, "https://www.amd.com/system/files/styles/992px/private/2019-10/310557-amd-radeon-rx-5500-graphics-card-1260x709.png?itok=9K6xt5bL", 1260),
    new GPU("AMD", "Radeon RX", "5600 XT", 6, "GDDR6", 150, 1375, 1560, 6602, "https://i.imgur.com/diMaq2j.png", 1770),
    new GPU("AMD", "Radeon RX", "5700", 8, "GDDR6", 180, 1465, 1775, 7879, "https://www.amd.com/system/files/2019-06/237107-rx5700-gpu-gallery1-1260x709.png", 2210),
    new GPU("AMD", "Radeon RX", "5700 XT", 8, "GDDR6", 225, 1605, 1905, 8675, "https://www.amd.com/system/files/2019-06/237107-rx5700xt-gpu-gallery2-1260x709.png", 2530),
    new GPU("AMD", "Radeon RX", "6700 XT", 12, "GDDR6", 230, 2321, 2581, 11097, "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/03/amd-radeon-rx-6700-xt-frandroid-2021.png?resize=580,580", 3030),
    new GPU("AMD", "Radeon RX", "6800", 16, "GDDR6", 250, 1805, 2105, 13872, "https://i.imgur.com/Ec11SYn.png", 3670),
    new GPU("AMD", "Radeon RX", "6800 XT", 16, "GDDR6", 300, 2015, 2250, 16424, "https://www.bug.hr/img/amd-radeon-rx-6800-i-6800-xt-16-gb-povratak-u-prvu-ligu_S0dPsZ.png", 4100),
    new GPU("AMD", "Radeon RX", "6900 XT", 16, "GDDR6", 300, 2015, 2250, 17349, "https://www.amd.com/system/files/2020-10/579976-radeon-rx-6000xt-left-angle-1260x709_0.png", 6310),
]

let apuList = [
    new GPU("AMD", "Radeon", "RX Vega 8", 2, 0, 0, 0, 0, 991, "https://i.imgur.com/F94ITNZ.png", 0),
    new GPU("AMD", "Radeon", "RX Vega 11", 2, 0, 0, 0, 0, 1330, "https://i.imgur.com/F94ITNZ.png", 0)
]

let storageList = [
    new HDD("Seagate", "Barracuda ST500DM002 500GB", "500GB", 7200, 16, "https://i.imgur.com/lC4LHsY.png", 240),
    new HDD("Western Digital", "Blue WD5000AZLX 500GB", "500GB", 7200, 32, "https://i.imgur.com/a7sLk7W.png", 260),
    new HDD("Toshiba", "Blue DT01ACA050 500GB", "500GB", 7200, 32, "https://i.imgur.com/a7sLk7W.png", 270),
    new HDD("Toshiba", "P300 HDWD110UZSVA 1TB", "1TB", 7200, 64, "https://i.imgur.com/JhPZrDt.png", 310),
    new HDD("Western Digital", "Blue WD10EZRZ 1TB", "1TB", 7200, 64, "https://i.imgur.com/a7sLk7W.png", 320),
    new HDD("Seagate", "Barracuda ST1000DM010 1TB", "1TB", 7200, 64, "https://i.imgur.com/qN2Qy7G.png", 330),
    new HDD("Toshiba", "P300 HDWD120UZSVA 2TB", "2TB", 7200, 64, "https://i.imgur.com/XwgIE5Y.png", 420),
    new HDD("Seagate", "Barracuda ST2000DM008 2TB", "2TB", 7200, 64, "https://i.imgur.com/leTMDnx.png", 420),
    new HDD("Western Digital", "Blue WD20EZRZ 2TB", "2TB", 7200, 64, "https://i.imgur.com/KhTa9kw.png", 450),
    new HDD("Toshiba", "P300 HDWD130UZSVA 3TB", "3TB", 7200, 64, "https://i.imgur.com/oUcmntC.png", 550),
    new HDD("Western Digital", "Blue WD30EZRZ 3TB", "3TB", 7200, 64, "https://i.imgur.com/OgoeoaZ.png", 660),
    new HDD("Seagate", "Barracuda ST3000DM007 3TB", "3TB", 7200, 256, "https://i.imgur.com/t3HKJG6.png", 670),
    new HDD("Seagate", "P300 HDWD240UZSVA 4TB", "4TB", 7200, 128, "https://i.imgur.com/oUcmntC.png", 610),
    new HDD("Seagate", "Barracuda ST4000DM008 4TB", "4TB", 7200, 256, "https://i.imgur.com/t3HKJG6.png", 780),
    new HDD("Western Digital", "Red Pro WD4003FFBX 4TB", "4TB", 7200, 128, "https://i.imgur.com/JGDm1jP.png", 1100),
    new HDD("Seagate", "Barracuda ST6000DM003 6TB", "6TB", 7200, 256, "https://i.imgur.com/t3HKJG6.png", 1250),
    new HDD("Toshiba", "X300 6TB", "6TB", 7200, 128, "https://i.imgur.com/k7J9vvz.png", 1250),
    new HDD("Western Digital", "Black WD6003FZBX 6TB", "6TB", 7200, 256, "https://i.imgur.com/tWPhi6M.png", 1900),
    new SSD("Patriot", "P200 256GB", "256GB", `SATA 3(2.5")`, 460, 530, "https://i.imgur.com/dNmQr3e.png", 280),
    new SSD("Gigabyte", "GP-GSTFS31256GTND 256GB", "256GB", `SATA 3(2.5")`, 500, 520, "https://www.nabava.net/slike/products/01/47/7964701/thumb290_gigabyte-ssd-256gb-25-sata_a8377c7b.png", 350),
    new SSD("Teamgroup", "Vulcan G 512GB", "512GB", `SATA 3(2.5")`, 500, 550, "https://i.imgur.com/vpww54R.png", 430),
    new SSD("Adata", "Ultimate SU800 512GB", "512GB", `SATA 3(2.5")`, 520, 560, "https://www.nabava.net/slike/products/43/33/8913343/thumb290_adata-ultimate-su800-ssd-512gb-25_d743768c.png", 450),
    new SSD("Crucial", "BX550 1TB", "1TB", `SATA 3(2.5")`, 500, 540, "https://www.nabava.net/slike/products/43/67/9626743/thumb290_crucial-bx500-ssd-1tb-25_583e0145.png", 800),
    new SSD("Samsung", "870 QVO 1TB", "1TB", `SATA 3(2.5")`, 530, 560, "https://i.imgur.com/LZjndtg.png", 830),
    new SSD("Western Digital", "Green WDS200T2G0A 2TB", "2TB", `SATA 3(2.5")`, 500, 545, "https://www.nabava.net/slike/products/11/53/12515311/thumb290_western-digital-green-wds200t2g0a-ssd-2tb-25-sata_b14f3c90.png", 1400),
    new SSD("Samsung", "870 QVO 2TB", "2TB", `SATA 3(2.5")`, 530, 560, "https://i.imgur.com/LZjndtg.png", 1630),
    new SSD("Patriot", "P300 256GB", "256GB", "M.2", 1100, 1700, "https://i.imgur.com/pkfAXJJ.png", 270),
    new SSD("Silicon Power", "A60 256GB", "256GB", "M.2", 1600, 2200, "https://i.imgur.com/Qnz4JK0.png", 300),
    new SSD("Intel", "660P 512GB", "512GB", "M.2", 1800, 1800, "https://i.imgur.com/VjW9pU0.png", 520),
    new SSD("Adata", "XPG Gammix S5 512GB", "512GB", "M.2", 1500, 2100, "https://i.imgur.com/l8tDKUn.png", 580),
    new SSD("Crucial", "P1 1TB", "1TB", "M.2", 1700, 2000, "https://i.imgur.com/09YIrTt.png", 800),
    new SSD("Kingston", "A2000", "1TB", "M.2", 2000, 2200, "https://i.imgur.com/sRRbz3f.png", 870),
    new SSD("Adata", "Swordfish 2TB", "2TB", "M.2", 1200, 1800, "https://i.imgur.com/Ohip70x.png", 1800),
    new SSD("Adata", "XPG Spectrix S40G 2TB", "2TB", "M.2", 3000, 3500, "https://i.imgur.com/q3ba6US.png", 1880),
    new SSD("Corsair", "Force Series MP600 4TB", "4TB", "M.2", 3950, 4950, "https://www.corsair.com/medias/sys_master/images/images/h7a/hc7/9683831914526/base-mp600-core-config/Gallery/MP600_CORE_01/-base-mp600-core-config-Gallery-MP600-CORE-01.png_1200Wx1200H", 6680)
]

let psuList = [
    new PSU("Corsair", "VS350", 350, "80+ White", "Ne", "https://www.corsair.com/medias/sys_master/images/images/hb8/h5e/9111542890526/-CP-9020095-UK-Gallery-Gallery-10.png", 290),
    new PSU("Thermaltake", "TR2 S 350W", 350, "80+ White", "Ne", "https://i.imgur.com/5qe7qcx.png", 400),
    new PSU("CoolerMaster", "Elite V3 400W", 400, "80+ White", "Ne", "https://i.imgur.com/RiAAOYA.png", 320),
    new PSU("be quiet!", "System Power 9 400W", 400, "80+ Bronze", "Ne", "https://i.imgur.com/kaea4GL.png", 370),
    new PSU("Thermaltake", "TR2 S 450W", 450, "80+ White", "Ne", "https://i.imgur.com/VGfb463.png", 280),
    new PSU("Gigabyte", "P450B", 450, "80+ Bronze", "Ne", "https://static.gigabyte.com/StaticFile/Image/Global/2f31906fda9aee807688e319f0d6b5b6/Product/25281/webp/1000", 340),
    new PSU("SilverStone", "Strider Essential ST50F V2 500W", 500, "80+ White", "Ne", "https://i.imgur.com/GQpyBYD.png", 330),
    new PSU("CoolerMaster", "MWE Bronze V2 500W", 500, "80+ Bronze", "Ne", "https://s3-eu-west-1.amazonaws.com/cdn.coolermaster.com/assets/1005/1_gallery_500_mwe_bronze_v2-zoom.png", 420),
    new PSU("Gigabyte", "Pulse P550B", 550, "80+ Bronze", "Ne", "https://static.gigabyte.com/StaticFile/Image/Global/0f41be9975de5bc971a7fd6780c031ae/Product/25288/png/500", 380),
    new PSU("Seasonic", "S12 III 550W", 550, "80+ Bronze", "Ne", "https://i.imgur.com/vrDWXr5.png", 400),
    new PSU("EVGA", "600 BR", 600, "80+ Bronze", "Ne", "https://images.evga.com/products/gallery/png/100-BR-0600-K1_XL_4.png", 420),
    new PSU("CoolerMaster", "MWE Bronze V2 600W", 600, "80+ Bronze", "Ne", "https://i.imgur.com/Pr1erB4.png", 510),
    new PSU("Corsair", "CV560", 650, "80+ Bronze", "Ne", "https://www.corsair.com/medias/sys_master/images/images/h91/hb3/9463845191710/-CP-9020211-NA-Gallery-CV650-PSU-01.png", 530),
    new PSU("Gigabyte", "P650B", 650, "80+ Bronze", "Ne", "https://static.gigabyte.com/StaticFile/Image/Global/5c2ce8701ec2aa3c73cac267dca25165/Product/18268/png/500", 400),
    new PSU("CoolerMaster", "MWE Bronze V2 700W", 700, "80+ Bronze", "Ne", "https://i.imgur.com/AtLS66T.png", 600),
    new PSU("be quiet!", "System Power 9 700W", 700, "80+ Bronze", "Ne", "https://i.imgur.com/cfz8eVt.png", 700),
    new PSU("SilverStone", "ET750-B", 750, "80+ Bronze", "Ne", "https://i.imgur.com/I0Cpr3s.png", 690),
    new PSU("EVGA", "750W BQ", 750, "80+ Bronze", "Da", "https://images.evga.com/products/gallery/png/110-BQ-0750-V1_XL_4.png", 780),
    new PSU("EVGA", "850 BQ", 850, "80+ Bronze", "Da", "https://i.imgur.com/ZJg9hG7.png", 960),
    new PSU("Corsair", "RM1000X", 1000, "80+ Gold", "Da", "https://www.corsair.com/medias/sys_master/images/images/hde/h93/9110102573086/-CP-9020094-NA-Gallery-RMx-1000-02.png", 1440),
    new PSU("be quiet!", "Straight Power 11 1000W", 1000, "80+ Gold", "Da", "https://i.imgur.com/amKlCf1.png", 1800),
]

//Dodavanje komponenata u modal
for (let i = 0; i < cpuList.length; i++) { //CPU
    addCpu.innerHTML += `
        <div class="row pc-part modal-close" id="cpu${i+1}" onclick="CpuAdded(this.id)">
            <div class="col s12 m8 l2 offset-m2 offset-l5">
                <img src="${cpuList[i].image}" class="responsive-img">
            </div>
            <hr>
            <div class="col s12 m12 l12 row center-align">    
                <p class="comp-modal-title flow-text" id="cpuName${i+1}">${cpuList[i].brand+" "+cpuList[i].series+" "+cpuList[i].name}</p>
                <div class="col s6 m3 l2">
                    <p class="comp-modal-text flow-text">Socket:<br>${cpuList[i].socket}</p>
                </div>
                <div class="col s6 m3 l2">
                    <p class="comp-modal-text flow-text">Broj fizičkih jezgri:<br>${cpuList[i].cores}</p>
                </div>
                <div class="col s6 m3 l2">
                    <p class="comp-modal-text flow-text">Broj logičkih jezgri:<br>${cpuList[i].threads}</p>
                </div>
                <div class="col s6 m3 l2">
                    <p class="comp-modal-text flow-text">Veličina transistora:<br>${cpuList[i].tSize}nm</p>
                </div>
                <div class="col s6 m3 l2">
                    <p class="comp-modal-text flow-text">Snaga:<br>${cpuList[i].tdp}W</p>
                </div>
                <div class="col s6 m3 l2">
                    <p class="comp-modal-text flow-text">Brzina:<br>${cpuList[i].baseGhz}GHz-${cpuList[i].boostGhz}GHz</p>
               </div>
                <div class="col s6 m3 l2">
                    <p class="comp-modal-text flow-text">Intergrirana grafika:<br>${cpuList[i].graphics}</p>
                </div>
                <div class="col s6 m3 l2">
                    <p class="comp-modal-text flow-text">Performansa:<br>${cpuList[i].score}</p>
                </div>
                <div class="col s6 m3 l2">
                    <p class="comp-modal-text flow-text">Mogucnost OC:<br>${cpuList[i].oc}</p>
                </div>
                <div class="col s6 m3 l2">
                    <p class="comp-modal-text flow-text">Dolazi s hladnjakom:<br>${cpuList[i].cooler}</p>
                </div>
                <div class="col s6 m3 l2">
                <p class="comp-modal-text flow-text">Cijena:<br>${cpuList[i].price}kn</p>
                </div>
        </div>`

}

for (let i = 4; i < coolerList.length; i++) { //Hladnjaci
    addCooler.innerHTML +=
        `<div class="row pc-part modal-close" id="cooler${i}" onclick="CoolerAdded(this.id)">
            <div class="col s12 m8 l2 offset-m2 offset-l5">
                <img src="${coolerList[i].image}" class="responsive-img">
            </div>
            <hr>
            <div class="col s12 m12 l12 row center-align">
                <p class="comp-modal-title flow-text" id="coolerName${i-3}">${coolerList[i].brand+" "+coolerList[i].name}</p>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Socket:<br>${coolerList[i].socket}</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Broj ventilatora:<br>${coolerList[i].fans}</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Format:<br>${coolerList[i].size}mm</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Cijena:<br>${coolerList[i].price}kn</p>
                </div>
        </div>`
}

for (let i = 0; i < mbList.length; i++) { //MB
    addMb.innerHTML += `<div class="row pc-part modal-close" id="mb${i+1}" onclick="MbAdded(this.id)">
    <div class="col s12 m8 l2 offset-m2 offset-l5">
        <img src="${mbList[i].image}" class="responsive-img">
    </div>
    <hr>
    <div class="col s12 m12 l12 row center-align">
        <p class="comp-modal-title flow-text" id="mbName${i+1}">${mbList[i].brand+" "+mbList[i].name}</p>
        <div class="col s6 m3 l3">
            <p class="comp-modal-text flow-text">Čipset:<br>${mbList[i].chipset}</p>
        </div>
        <div class="col s6 m3 l3">
            <p class="comp-modal-text flow-text">Socket:<br>${mbList[i].socket}</p>
        </div>
        <div class="col s6 m3 l3">
            <p class="comp-modal-text flow-text">Veličina:<br>${mbList[i].size}</p>
        </div>
        <div class="col s6 m3 l3">
            <p class="comp-modal-text flow-text">Broj RAM slotova:<br>${mbList[i].ramSlots}</p>
        </div>
        <div class="col s6 m3 l3">
            <p class="comp-modal-text flow-text">Max RAM brzina:<br>${mbList[i].maxRamSpeed}MHz</p>
        </div>
        <div class="col s6 m3 l3">
            <p class="comp-modal-text flow-text">M.2 utori:<br>${mbList[i].nvme}</p>
        </div>
        <div class="col s6 m3 l3">
            <p class="comp-modal-text flow-text">SATA utori:<br>${mbList[i].sata}</p>
        </div>
        <div class="col s6 m3 l3">
            <p class="comp-modal-text flow-text">PCI utori:<br>${mbList[i].pci}</p>
        </div>
        <div class="col s6 m3 l3">
            <p class="comp-modal-text flow-text">PCI-e utori:<br>${mbList[i].pcie}</p>
        </div>
        <div class="col s6 m3 l3">
            <p class="comp-modal-text flow-text">Cijena:<br>${mbList[i].price}kn</p>
        </div>
</div>`
}

for (let i = 0; i < ramList.length; i++) { //RAM
    addRam.innerHTML +=
        `<div class="row pc-part modal-close" id="ram${i+1}" onclick="RamAdded(this.id)">
            <div class="col s12 m8 l2 offset-m2 offset-l5">
                <img src="${ramList[i].image}" class="responsive-img">
            </div>
            <hr>
            <div class="col s12 m12 l12 row center-align">
                <p class="comp-modal-title flow-text" id="ramName${i+1}">${ramList[i].brand+" "+ramList[i].name}</p>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Kapacitet:<br>${ramList[i].capacity}GB</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Brzina:<br>${ramList[i].speed}MHz</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Latencija:<br>CL${ramList[i].latency}</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Broj memorijskih kartica:<br>${ramList[i].stickNumber}</p>
                </div>
                <div class="col s6 m3 l3">
                <p class="comp-modal-text flow-text">Cijena:<br>${ramList[i].price}kn</p>
                </div>
            </div>
        </div>`
}

for (let i = 0; i < gpuList.length; i++) { //GPU
    addGpu.innerHTML +=
        `<div class="row pc-part modal-close" id="gpu${i+1}" onclick="GpuAdded(this.id)">
            <div class="col s12 m8 l2 offset-m2 offset-l5">
                <img src="${gpuList[i].image}" class="responsive-img">
            </div>
            <hr>
            <div class="col s12 m12 l12 row center-align">
                <p class="comp-modal-title flow-text" id="gpuName${i+1}">${gpuList[i].brand+" "+gpuList[i].series+" "+gpuList[i].gpu}</p>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Grafički čip:<br>${gpuList[i].series+" "+gpuList[i].gpu}</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Kapacitet video memorije:<br>${gpuList[i].vramCapacity}GB</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Vrsta video memorije:<br>${gpuList[i].vramType}</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Snaga:<br>${gpuList[i].tdp}W</p>
                </div>
                <div class="col s6 m3 l3">
                <p class="comp-modal-text flow-text">Brzina:<br>${gpuList[i].coreClock}MHz-${gpuList[i].boostClock}MHz</p>
                </div>
                <div class="col s6 m3 l3">
                <p class="comp-modal-text flow-text">Performansa:<br>${gpuList[i].score}</p>
                </div>
                <div class="col s6 m3 l3">
                <p class="comp-modal-text flow-text">Cijena:<br>${gpuList[i].price}kn</p>
                </div>
            </div>
        </div>`
}

for (let i = 0; i < storageList.length; i++) { //Pohrana podataka
    if (storageList[i].constructor.name == "HDD") { //HDD i SSD diskovi razlikuju se po objektima pa prvo treba provjeriti koji se objekt stvalja u modal
        addStorage.innerHTML +=
            `<div class="row pc-part modal-close" id="storage${i+1}" onclick="StorageAdded(this.id)">
            <div class="col s12 m8 l2 offset-m2 offset-l5">
                <img src="${storageList[i].image}" class="responsive-img">
            </div>
            <hr>
            <div class="col s12 m12 l12 row center-align">
                <p class="comp-modal-title flow-text" id="storageName${i+1}">${storageList[i].brand+" "+storageList[i].name}</p>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Kapacitet:<br>${storageList[i].capacity}</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Tip diska:<br>HDD(3.5")</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Broj okretaja po minuti:<br>${storageList[i].rpm}RPM</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Cache memorija:<br>${storageList[i].cache}MB</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Cijena:<br>${storageList[i].price}kn</p>
                </div>
            </div>
        </div>`
    } else {
        addStorage.innerHTML +=
            `<div class="row pc-part modal-close" id="storage${i+1}" onclick="StorageAdded(this.id)">
            <div class="col s12 m8 l2 offset-m2 offset-l5">
                <img src="${storageList[i].image}" class="responsive-img">
            </div>
            <hr>
            <div class="col s12 m12 l12 row center-align">
                <p class="comp-modal-title flow-text" id="storageName${i+1}">${storageList[i].brand+" "+storageList[i].name}</p>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Kapacitet:<br>${storageList[i].capacity}</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Tip diska:<br>${storageList[i].type}</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Brzina zapisivanja podataka:<br>${storageList[i].writeSpeed}MB/s</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Brzina čitanja podataka:<br>${storageList[i].readSpeed}MB/s</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Cijena:<br>${storageList[i].price}kn</p>
                </div>
            </div>
        </div>`
    }
}

for (let i = 0; i < psuList.length; i++) { //PSU
    addPsu.innerHTML +=
        `<div class="row pc-part modal-close" id="psu${i+1}" onclick="PsuAdded(this.id)">
            <div class="col s12 m8 l2 offset-m2 offset-l5">
                <img src="${psuList[i].image}" class="responsive-img">
            </div>
            <hr>
            <div class="col s12 m12 l12 row center-align">
                <p class="comp-modal-title flow-text" id="psuName${i+1}">${psuList[i].brand+" "+psuList[i].name}</p>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Snaga:<br>${psuList[i].wattage}W</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Efikasnost:<br>${psuList[i].rating}</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Modularno:<br>${psuList[i].modular}</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Cijena:<br>${psuList[i].price}kn</p>
                </div>
            </div>
        </div>`
}

//Seacrh funkcija
function Search(searchBar, list, searchBy) {

    for (let i = 1; i <= list; i++) {
        if (document.getElementById(searchBy + i).innerHTML.toUpperCase().includes(searchBar.value.toUpperCase()) === true) {
            document.getElementById(searchBy + i).parentElement.parentElement.style.display = "block"
        } else if (searchBar.value == "") {
            document.getElementById(searchBy + i).parentElement.parentElement.style.display = "block"
        } else {
            document.getElementById(searchBy + i).parentElement.parentElement.style.display = "none"
        }
    }

    Compatability() //Funkcija se poziva da se svi search itemi koji nisu kompatibilni maknu s ekrana
}

//Aktivacija search funkcije
document.getElementById("cpuSearch").addEventListener("input", () => { //CPU
    Search(cpuSearch, cpuList.length, "cpuName")
})

document.getElementById("coolerSearch").addEventListener("input", () => { //Hladnjaci
    Search(coolerSearch, coolerList.length - 4, "coolerName")
})
document.getElementById("mbSearch").addEventListener("input", () => { //MB
    Search(mbSearch, mbList.length, "mbName")
})
document.getElementById("ramSearch").addEventListener("input", () => { //RAM
    Search(ramSearch, ramList.length, "ramName")
})
gpuSearch.addEventListener("input", () => { //GPU
    Search(gpuSearch, gpuList.length, "gpuName")
})
storageSearch.addEventListener("input", () => { //Pohrana podataka
    Search(storageSearch, storageList.length, "storageName")
})
psuSearch.addEventListener("input", () => { //PSU
    Search(psuSearch, psuList.length, "psuName")
})
caseSearch.addEventListener("input", () => { //Kuciste

})
fanSearch.addEventListener("input", () => { //Dodatno hladenje

})

//Dodavanje komponenata
function CpuAdded(i) {
    i = String(i).split("u")[1]
    finalCpu = cpuList[i - 1]

    cCpu.innerHTML = `
        <div class="row center-align">    
            <p class="comp-text center-align flow-text">${finalCpu.brand+" "+finalCpu.series+" "+finalCpu.name}</p>
            <div class="col s6 m4 l6 offset-s3 offset-m3 offset-l3">    
                <img src="${finalCpu.image}" class="responsive-img selected-img">
            </div>
        </div>
        `

    //Dodavanje besplatnog hladnjaka
    if (finalCooler == null || finalCooler.price == 0) { //Provjerava se postoji li vec hladnjak(ako ne postoji izlaz je true)
        if (finalCpu.cooler.length > 2) { //Provjerava se dolazi li hladnjak s procesorom
            for (let i = 0; i < 4; i++) {
                if (coolerList[i].name == finalCpu.cooler) { //Dodavanje hladnjaka
                    CoolerAdded("cooler" + i)
                }
            }
        } else {
            ResetCooler() //Resetiranje hladnjaka ako procesor nema hladnjak a procesor izabran prije njega ima
        }
    }

    //Brisanje nekompatibilne maticne ploce
    if (finalMb !== null && finalCpu.socket != finalMb.socket) { //Ako postoji maticna ploca te se izabere procesor koji nije kompatibilan, maticna ploca ce se izbrisati
        finalMb = null
        ResetMb()
    }

    //Intergrirana grafika
    if ((finalGpu == null || finalGpu.price == 0) && finalCpu.graphics != "Ne") { //Ako ne postoji izabrana graficka kartica ili druga intergriran grafika
        if (finalCpu.graphics == "Radeon Vega 8") {
            ApuAdded(0)
        } else {
            ApuAdded(1)
        }
    }

    priceOfCpu = finalCpu.price //Postavljanje cijene
    Price()
}

function CoolerAdded(i) {
    i = String(i).split("r")[1]
    finalCooler = coolerList[i]

    cCooler.innerHTML = `
    <div class="row">    
        <p class="comp-text center-align flow-text">${finalCooler.brand+" "+finalCooler.name}</p>
        <div class="col s6 m6 l6 offset-s3 offset-m3 offset-l3">    
            <img src="${finalCooler.image}" class="selected-img responsize-img">
        </div>
    </div>
    `
    priceOfCooler = finalCooler.price
    Price()
}

function MbAdded(i) {
    i = String(i).split("b")[1]
    finalMb = mbList[i - 1]

    cMb.innerHTML = `
        <div class="row center-align">    
            <p class="comp-text center-align flow-text">${finalMb.brand+" "+finalMb.name}</p>
            <div class="col s6 m4 l6 offset-s3 offset-m3 offset-l3">    
                <img src="${finalMb.image}" class="responsive-img selected-img">
            </div>
        </div>
        `

    //Brisanje starog RAMa ukoliko nije kompatibilan
    if (finalRam != null && (finalRam.stickNumber > finalMb.ramSlots || finalRam.speed > finalMb.maxRamSpeed)) {
        finalRam = null
        ResetRam()
    }

    priceOfMb = finalMb.price
    Price()
}

function RamAdded(i) {
    i = String(i).split("m")[1]
    finalRam = ramList[i - 1]

    cRam.innerHTML = `
        <div class="row center-align">    
            <p class="comp-text center-align flow-text">${finalRam.brand+" "+finalRam.name}</p>
            <div class="col s6 m4 l6 offset-s3 offset-m3 offset-l3">    
                <img src="${finalRam.image}" class="responsive-img selected-img">
            </div>
        </div>
        `

    priceOfRam = finalRam.price
    Price()
}

function GpuAdded(i) {
    i = String(i).split("u")[1]
    finalGpu = gpuList[i - 1]

    cGpu.innerHTML = `
    <div class="row">    
        <p class="comp-text center-align flow-text">${finalGpu.brand+" "+finalGpu.series+" "+finalGpu.gpu}</p>
        <div class="col s6 m6 l6 offset-s3 offset-m3 offset-l3">    
            <img src="${finalGpu.image}" class="selected-img responsize-img">
        </div>
    </div>
    `

    priceOfGpu = finalGpu.price
    Price()
}

function ApuAdded(i) {
    finalGpu = apuList[i]

    cGpu.innerHTML = `
    <div class="row">    
        <p class="comp-text center-align flow-text">${finalGpu.brand+" "+finalGpu.series+" "+finalGpu.gpu}</p>
        <div class="col s6 m6 l6 offset-s3 offset-m3 offset-l3">    
            <img src="${finalGpu.image}" class="selected-img responsize-img">
        </div>
    </div>
    `

    Price()
}

function StorageAdded(i) {
    i = String(i).split("e")[1]
    finalStorage = storageList[i - 1]

    cStorage.innerHTML = `
    <div class="row">    
        <p class="comp-text center-align flow-text">${finalStorage.brand+" "+finalStorage.name}</p>
        <div class="col s6 m6 l6 offset-s3 offset-m3 offset-l3">    
            <img src="${finalStorage.image}" class="selected-img responsize-img">
        </div>
    </div>
    `
    priceOfStorage = finalStorage.price
    Price()
}

function PsuAdded(i) {
    i = String(i).split("u")[1]
    finalPsu = psuList[i - 1]

    cPsu.innerHTML = `
    <div class="row">    
        <p class="comp-text center-align flow-text">${finalPsu.brand+" "+finalPsu.name}</p>
        <div class="col s6 m6 l6 offset-s3 offset-m3 offset-l3">    
            <img src="${finalPsu.image}" class="selected-img responsize-img">
        </div>
    </div>
    `
    priceOfPsu = finalPsu.price
    Price()
}

//Reset funkcije
function ResetCpu() {
    cCpu.innerHTML = ` 
    <p class="comp-text center-align flow-text">PROCESOR</p>
    <i class="material-icons comp-icon medium">add_circle</i>` //Postavlja se na orginalnu HTML vrijednost

    //Ako je odabran hladnjak koji dolazi s procesorom, brise se
    if (finalCooler != null && finalCooler.price == 0) {
        ResetCooler()
    }

    priceOfCpu = 0 //Brisanje cijene
    finalCpu = null //Brisanje odabrane komponente

    for (let i = 0; i < mbList.length; i++) { //Sve maticne ploce postaju kompatibilne(jer nema prosecora)
        document.getElementById("mbName" + (i + 1)).parentElement.parentElement.style.display = "block"
    }

    Price() //Zvanje funkcija da bi se azurirale cijene i performansa
}

function ResetCooler() {
    cCooler.innerHTML = `
    <p class="comp-text center-align flow-text">HLADNJAK ZA PROCESOR</p>
    <i class="material-icons comp-icon medium">add_circle</i>`

    priceOfCooler = 0
    finalCooler = null

    Price()
}

function ResetMb() {
    cMb.innerHTML = ` <p class="comp-text center-align flow-text">MATIČNA PLOČA</p>
    <i class="material-icons comp-icon medium">add_circle</i>`

    priceOfMb = 0
    finalMb = null

    Price()

    for (let i = 0; i < ramList.length; i++) { //Svaki RAM postaje kompatibilan(jer nema maticne ploce)
        document.getElementById("ramName" + (i + 1)).parentElement.parentElement.style.display = "block"
    }
}

function ResetRam() {
    cRam.innerHTML = `<p class="comp-text center-align flow-text">RADNA MEMORIJA</p>
    <i class="material-icons comp-icon medium">add_circle</i>`

    priceOfRam = 0
    finalRam = null

    Price()
}

function ResetGpu() {
    cGpu.innerHTML = `<p class="comp-text center-align flow-text">GRAFIČKA KARTICA</p>
    <i class="material-icons comp-icon medium">add_circle</i>`

    finalGpu = null
    priceOfGpu = 0

    Price()
}

function ResetStorage() {
    cStorage.innerHTML = `<p class="comp-text center-align flow-text">POHRANA PODATAKA</p>
    <i class="material-icons comp-icon medium">add_circle</i>`

    priceOfStorage = 0
    finalStorage = null

    Price()
}

function ResetPsu() {
    cPsu.innerHTML = `<p class="comp-text center-align flow-text">NAPAJANJE</p>
    <i class="material-icons comp-icon medium">add_circle</i>`

    priceOfPsu = 0
    finalPsu = null

    Price()
}

function ResetCase() {
    cCase.innerHTML = `<p class="comp-text center-align flow-text">KUĆIŠTE</p>
    <i class="material-icons comp-icon medium">add_circle</i>`

    priceOfCase = 0
    finalCase = null

    Price()
}

function ResetFans() {
    cFans.innerHTML = `<p class="comp-text center-align flow-text">DODATNO HLAĐENJE</p>
    <i class="material-icons comp-icon medium">add_circle</i>`

    priceOfFans = 0
    finalFans = null

    Price()
}

//Kompatabilnost
function Compatability() {
    //CPU>MB
    for (let i = 0; i < mbList.length; i++) {
        if (finalCpu != null && mbList[i].socket != finalCpu.socket && document.getElementById(`mb${i+1}`).style.display != "none") { //Ako maticna ploca nije kompatibilna s procesorom i pokazuje se u searchu skriva se
            document.getElementById("mbName" + (i + 1)).parentElement.parentElement.style.display = "none"
        }
    }

    //MB>RAM
    for (let i = 0; i < ramList.length; i++) {
        if (finalMb != null && (ramList[i].stickNumber > finalMb.ramSlots || ramList[i].speed > finalMb.maxRamSpeed) == true && document.getElementById(`ram${i+1}`).style.display != "none") { //Ako RAM nije kompatibilan s maticnom plocom i pokazuje se u searchu skriva se
            document.getElementById("ramName" + (i + 1)).parentElement.parentElement.style.display = "none"
        }
    }

}

//Performansa
let gamingScore; //Gaming i Workstation performansa
let workstationScore;

function PerformanceOutput() {

    //Gaming
    function GamingPerformance() {
        gamingScore = Math.round((finalCpu.score + finalGpu.score) * 0.0029) //Broj je dobiven dijeljenjem broja 100 s najvecom mogucom performansom

        switch (finalRam.latency) { //Svi procesori imaju bolju performansu ovisno o latenciji RAM-a
            case 17:
                gamingScore *= 1.05
                break;
            case 16:
                gamingScore *= 1.07
                break;
            case 15:
                gamingScore *= 1.1
                break;
        }
        gamingScore = Math.round(gamingScore)

        if (finalRam.stickNumber > 1) { //Tzv. dual-chanel RAM donosi bolju performansu
            gamingScore *= 1.1
            gamingScore = Math.round(gamingScore)
        }

        if (finalCpu.series.includes("Ryzen")) { //Ryzen procesori imaju bolju performansu sto je brzi RAM
            switch (finalRam.speed) {
                case 3000:
                    gamingScore *= 1.03
                    break;
                case 3200:
                    gamingScore *= 1.05
                    break;
                case 3600:
                    gamingScore *= 1.07
                    break;
                case 4000:
                    gamingScore *= 1.1
                    break;
            }
            gamingScore = Math.round(gamingScore)
        }

        if (finalRam.capacity >= 16) { //16GB+ RAM-a poboljsaje gaming performansu
            gamingScore += 2
        }
        gamingScore = Math.round(gamingScore)

        if (gamingScore > 100) { //100 je maksimum
            gamingScore = 100
        }

        document.getElementById("gaming").innerHTML = gamingScore + "/100"
    }

    function WorkstationPerformance() {
        workstationScore = Math.round((finalCpu.score + finalGpu.score) * 0.0029) //Broj je dobiven dijeljenjem broja 100 s najvecom mogucom performansom

        switch (finalCpu.cores) { //Broj fizickih jezgri utjece na performansu
            case 6:
                workstationScore += 1
                break;
            case 8:
                workstationScore *= 1.05
                break;
            case 12:
                workstationScore *= 1.07
                break;
            case 16:
                workstationScore *= 1.1
                break;
            default:
                workstationScore /= 1.06
                break;
        }
        workstationScore = Math.round(workstationScore)

        switch (finalCpu.threads) { //Broj logickih jezgri utjece na performansu
            case 12:
                workstationScore *= 1.1
                break;
            case 16:
                workstationScore *= 1.13
                break;
            case 24:
                workstationScore *= 1.17
                break;
            case 32:
                workstationScore *= 1.2
                break;
            default:
                workstationScore /= 1.03
                break;
        }
        workstationScore = Math.round(workstationScore)

        if (finalCpu.series.includes("Ryzen")) { //Ryzen procesori imaju bolju performansu sto je brzi RAM
            switch (finalRam.speed) {
                case 3000:
                    workstationScore += 1
                    break;
                case 3200:
                    workstationScore += 2
                    break;
                case 3600:
                    workstationScore += 3
                    break;
                case 4000:
                    workstationScore += 4
                    break;
                default:
                    workstationScore -= 2
                    break;
            }
            workstationScore = Math.round(workstationScore)
        }

        switch (finalRam.capacity) { //Velika kolicina memorije je vrlo bitna
            case 16:
                workstationScore *= 1.02
                break;
            case 32:
                workstationScore *= 1.05
                break;
            case 64:
                workstationScore *= 1.1
                break;
            default:
                workstationScore /= 1.1
                break;

        }
        workstationScore = Math.round(workstationScore)

        switch (finalGpu.vramCapacity) { //Kolicina video memorije vrlo je bitna
            case 6:
                workstationScore += 1
                break;
            case 8:
                workstationScore += 2
                break;
            case 10:
                workstationScore += 3
                break;
            case 11:
                workstationScore += 3
                break;
            case 12:
                workstationScore += 4
                break;
            case 24:
                workstationScore += 7
                break;
            default:
                workstationScore /= 1.035
                break;
        }
        workstationScore = Math.round(workstationScore)

        if (workstationScore > 100) { //100 je maksimum
            workstationScore = 100
        }

        document.getElementById("workstation").innerHTML = workstationScore + "/100"
    }

    if (finalCpu != null && finalRam != null && finalGpu != null) { //Performansa se ispisuje samo kada su sve potrebnme komponente izabrane
        GamingPerformance()
        WorkstationPerformance()
    } else { //Ako uvjet nije zadovoljen, performansa je 0
        document.getElementById("gaming").innerHTML = "0/100"
        document.getElementById("workstation").innerHTML = "0/100"
    }
}

//Snaga
let systemPower;
let reccomendedPower;

function PowerCalc() {
    //Snaga sistema
    if (finalCpu != null && finalGpu != null) { //Da bi se snaga updateala svaki put kada se izabere komponenta, cak iako sve komponente nisu izabrane
        systemPower = finalCpu.tdp + finalGpu.tdp
    } else if (finalCpu != null) {
        systemPower = finalCpu.tdp
    } else if (finalGpu != null) {
        systemPower = finalGpu.tdp
    } else {
        systemPower = 0
    }

    if (finalMb != null && finalMb.size == "ATX") { //Maticne ploce trose struje ovisno o velicini
        systemPower += 60
    } else if (finalMb != null && finalMb.size == "mAtx") {
        systemPower += 30
    }

    systemPower = Math.round(systemPower * 1.3) //Prava snaga uvijek je malo veca nego zbroj TDP snaga

    document.getElementById("power").innerHTML = `Snaga: ${systemPower}W`

    //Preporucena snaga
    reccomendedPower = Math.round(systemPower * 1.6) //Uvijek je pozeljeno imati napajanje jace nego potrebno

    document.getElementById("power").innerHTML = `Snaga: ${systemPower}W`
    document.getElementById("reccomendedPower").innerHTML = `Najmanja preporučena snaga napajanja: ${reccomendedPower}W`
}



//Cijena
let priceOfCpu = 0 //Postavljanje cijena na 0
let priceOfCooler = 0
let priceOfMb = 0
let priceOfRam = 0
let priceOfGpu = 0
let priceOfStorage = 0
let priceOfPsu = 0
let priceOfCase = 0
let priceOfFans = 0
let totalPrice = 0

function Price() {
    totalPrice = priceOfCpu + priceOfCooler + priceOfMb + priceOfRam + priceOfGpu + priceOfStorage + priceOfPsu + priceOfCase + priceOfFans //Ukupna cijena jednaka je zbroju cijena

    cpuPrice.innerHTML = "Cijena procesora:<br>" + priceOfCpu + "kn" //Ispis cijena na stranicu
    coolerPrice.innerHTML = "Cijena hladnjaka za procesor:<br>" + priceOfCooler + "kn"
    mbPrice.innerHTML = "Cijena matične ploče:<br>" + priceOfMb + "kn"
    ramPrice.innerHTML = "Cijena rande memorije:<br>" + priceOfRam + "kn"
    gpuPrice.innerHTML = "Cijena grafičke kartice:<br>" + priceOfGpu + "kn"
    psuPrice.innerHTML = "Cijena napajanja:<br>" + priceOfPsu + "kn"
    storagePrice.innerHTML = "Cijena pohrane podataka:<br>" + priceOfStorage + "kn"
    pcPrice.innerHTML = "Ukupna cijena:<br>" + totalPrice + "kn"

    PowerCalc() //Funkcije su dodane na kraj Price() funkcije jer se ona izvrsava svaki put kada se updatea neka komponenta sto se treba desiti i za ostale funkcije
    PerformanceOutput()
}