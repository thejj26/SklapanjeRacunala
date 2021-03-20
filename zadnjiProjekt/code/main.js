//Materialize carousel
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

//Animacije na ucitavanje stranice
window.addEventListener("load", () => {
    document.getElementById("floatIn").style.opacity = "1"
    document.getElementById("floatIn").style.marginTop = "7vh"
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
    }
    window.scrollTo({
        behavior: "smooth",
        top: 1
    })
})

//Scrollanje do PC buildera na pritisak botuna
document.getElementById("pcBuilderBtn").addEventListener("click", () => {
    window.document.getElementById("builder").scrollIntoView({
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
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal')
    var instances = M.Modal.init(elems, {
        onCloseEnd: function () {
            cpuSearch.value = ""
            Search(cpuSearch, cpuList.length, "cpuName")
            coolerSearch.value = ""
            Search(coolerSearch, coolerList.length - 4, "coolerName")
            mbSearch.value = ""
            ramSearch.value = ""
            gpuSearch.value = ""
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

function AIOCooler(brand, name, size, socket, fans, image, price) {
    this.brand = brand
    this.name = name
    this.size = size
    this.fans = fans
    this.image = image
    this.price = price
    this.socket = socket
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
    new AirCooler("Zalman", "CNPS10X Optima II", "LGA1151/AM4", 1, 158, "https://i.imgur.com/DvN42cz.png", 270),
    new AirCooler("CoolerMaster", "Hyper 212 RGB", "LGA1151/AM4", 1, 160, "https://i.imgur.com/9Ff32E4.png", 365),
    new AirCooler("Arctic", "Freezer 34 eSports DUO", "LGA1151/AM4", 2, 157, "https://i.imgur.com/0qVIUG6.png", 350),
    new AirCooler("Noctua", "NH-U12A", "LGA1151/AM4", 2, 158, "https://i.imgur.com/v7GOpdS.png", 800),
    new AirCooler("Arctic", "Freezer 7X", "LGA1151/AM4", 1, 132, "https://i.imgur.com/KRMcBhn.png", 140),
    new AIOCooler("CoolerMaster", "MasterLiquid 240 Lite", "LGA1151/AM4", 240, 2, "https://i.imgur.com/CmQWIU6.png", 420),
    new AIOCooler("Arctic", "Liquid Freezer II", 240, "LGA1151/AM4", 2, "https://i.imgur.com/CaxUP9e.png", 660),
    new AIOCooler("Corsair", "iCue H150i ELITE CAPPELIX", "LGA1151/AM4", 360, 3, "https://i.imgur.com/MWn6zS0.png", 1580),
    new AIOCooler("Coolermaster", "MasterLiquid 120 Lite", "LGA1151/AM4", 120, 1, "https://www.nabava.net/slike/products/65/87/4568765/thumb290_cooler-master-vodeno-hladenje-masterliquid-lite-120-mlw-d12m-a20pw-r1_1a2b8fa0.png", 370)
]
let mbList = [
    new Mothebroad("MSI", "A320M-A PRO", "AM4", "A320", "mATX", 2, 3200, "Ne", 0, 4, 1, 1, "https://asset.msi.com/resize/image/global/product/product_5_20190729160213_5d3ea805c460e.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", 350),
    new Mothebroad("Gigabyte", "A320M-H", "AM4", "A320", "mATX", 2, 3200, "Ne", 1, 4, 2, 1, "https://static.gigabyte.com/StaticFile/Image/Global/509446198742ff412d8c2d4dcd7df8e7/Product/20311/png/500", 400),
    new Mothebroad("AsRock", "A320M-H Pro4-F", "AM4", "A320", "mATX", 4, 3200, "Ne", 2, 4, 1, 2, "https://i.imgur.com/fJoNehz.png", 530),
    new Mothebroad("MSI", "B350M Pro-VD Plus", "AM4", "B350", "mATX", 2, 3200, "Ne", 0, 4, 2, 1, "https://asset.msi.com/resize/image/global/product/product_10_20170614143312_5940d8a8e0b2f.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", 480),
    new Mothebroad("AsRock", "AB350M Pro4-F", "AM4", "B350", "mATX", 4, 3200, "Ne", 2, 4, 1, 2, "https://i.imgur.com/fJoNehz.png", 530),
    new Mothebroad("AsRock", "AB350 Gaming K4", "AM4", "B350", "ATX", 4, 3200, "Ne", 2, 6, 4, 2, "https://www.asrock.com/mb/photo/Fatal1ty%20AB350%20Gaming%20K4(L4).png", 630),
    new Mothebroad("Gigabyte", "B450M H", "AM4", "B450", "mATX", 2, 3600, "Ne", 1, 4, 2, 1, "https://static.gigabyte.com/StaticFile/Image/Global/b13021ab933b933336876c73ab6ba644/Product/24294/png/500", 470),
    new Mothebroad("Asus", "PRIME B450M-K II", "AM4", "B450", "mATX", 2, 4400, "Ne", 1, 4, 2, 1, "https://dlcdnwebimgs.asus.com/gain/ae050c7e-abbf-4794-bd1d-c26cd19aa183/w800", 530),
    new Mothebroad("Gigabyte", "B450 Aorus Elite V2", "AM4", "B450", "ATX", 4, 3600, "Ne", 2, 6, 2, 2, "https://static.gigabyte.com/StaticFile/Image/Global/8bdb4bae8b1a28b6daaa5cbe29b91ed2/Product/25864/png/500", 700),
    new Mothebroad("AsRock", "B550M-HDV", "AM4", "B550", "mATX", 2, 4600, "Ne", 1, 4, 1, 1, "https://www.asrock.com/mb/photo/B550M-HDV(L2).png", 700),
    new Mothebroad("AsRock", "B550 Phantom Gaming 4", "AM4", "B550", "ATX", 4, 4533, "Ne", 2, 6, 2, 2, "https://www.asrock.com/mb/photo/B550%20Phantom%20Gaming%204(L4).png", 760),
    new Mothebroad("Asus", "ROG STRIX B550-F Gaming", "AM4", "B550", "ATX", 4, 5100, "Ne", 2, 6, 3, 2, "https://rog.asus.com/websites/global/products/uri12btqafuvwte6/img/kv/pd.png", 1300),
    new Mothebroad("AsRock", "X370M-HDV", "AM4", "X370", "mATX", 2, 3200, "Ne", 1, 4, 1, 1, "https://www.asrock.com/mb/photo/X370M-HDV(L3).png", 480),
    new Mothebroad("Gigabyte", "GA-X370-K3", "AM4", "X370", "ATX", 4, 3200, "Ne", 1, 8, 3, 2, "https://static.gigabyte.com/StaticFile/Image/Global/5ce3dfa453c6089bb738a3e45db8d679/Product/16930/png/500", 950),
    new Mothebroad("MSI", "X470 Gaming Plus Max", "AM4", "X470", "ATX", 4, 4133, "Ne", 2, 6, 3, 3, "https://asset.msi.com/resize/image/global/product/product_8_20190717174039_5d2eed176ce56.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", 770),
    new Mothebroad("Asus", "TUF X470-PLUS GAMING", "AM4", "X470", "ATX", 4, 3466, "Ne", 3, 6, 3, 2, "https://www.asus.com/media/global/gallery/OGtnBg0jfcUMHyHS_setting_xxx_0_90_end_800.png", 1100),
    new Mothebroad("Gigabyte", "X570 GAMING X", "AM4", "X570", "ATX", 4, 4733, "Ne", 2, 6, 3, 2, "https://static.gigabyte.com/StaticFile/Image/Global/91a7aca44388c13f1762a98b367e5c3f/Product/22137/webp/1000", 1200),
    new Mothebroad("AsRock", "X570 Extreme4", "AM4", "X570", "ATX", 4, 4666, "Ne", 2, 8, 3, 2, "https://www.asrock.com/mb/photo/X570%20Extreme4(L3).png", 1830),
    new Mothebroad("Gigabyte", "H310M-H", "LGA1151", "H310", "mATX", 2, 2666, "Ne", 0, 4, 2, 1, "https://static.gigabyte.com/StaticFile/Image/Global/a4d2776938d10d8728980b6c3474f9ef/Product/19321/png/500", 380),
    new Mothebroad("AsRock", "H370M-HDV", "LGA1151", "H370", "mATX", 2, 2666, "Ne", 0, 4, 1, 1, "http://tw.asrock.com/mb/photo/H370M-HDV(L2).png", 480),
    new Mothebroad("Asus", "PRIME B360M-A", "LGA1151", "B360", "mATX", 2, 2666, "Ne", 1, 6, 2, 1, "https://www.asus.com/media/global/gallery/PKubhjDnP6TvgsGp_setting_xxx_0_90_end_1000.png", 570),
    new Mothebroad("Gigabyte", "B365 HD3", "LGA1151", "B365", "ATX", 2, 2666, "Ne", 1, 6, 2, 2, "https://static.gigabyte.com/StaticFile/Image/Global/386659f071e830af878bd84a1fd9aaee/Product/21689/png/500", 620),
    new Mothebroad("AsRock", "Z370 Pro4", "LGA1151", "Z370", "ATX", 4, 4266, "Ne", 2, 6, 3, 3, "https://www.asrock.com/mb/photo/Z370%20Pro4(L2).png", 860),
    new Mothebroad("Gigabyte", "Z390M", "LGA1151", "Z390", "mATX", 4, 4266, "Ne", 2, 6, 2, 2, "https://static.gigabyte.com/StaticFile/Image/Global/2b359ba50141dfb9389235d008dd7ffb/Product/20778/png/500", 910)
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
    new RAM("Kingston", "HyperX Predator Predator 64GB", 64, 2666, 18, 4, "https://i.imgur.com/OvAN9a7.png", 2680),
    new RAM("Patriot", "Viper Blackout 64GB", 64, 3200, 19, 2, "https://i.imgur.com/ntfJmy2.png", 2450),
    new RAM("G.Skill", "Flare X 64GB", 64, 3200, 16, 4, "https://i.imgur.com/zzaaUXH.png", 2750),
    new RAM("Patriot", "Viper Steel 64GB", 64, 3600, 16, 2, "https://i.imgur.com/48mm3e6.png", 2720),
    new RAM("G.Skill", "Trident Z Neo 64GB", 64, 3600, 18, 4, "https://i.imgur.com/AMZ2t1h.png", 3600),

]

//Dodavanje komponenata u modal
for (let i = 0; i < cpuList.length; i++) {
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
                    <p class="comp-modal-text flow-text">Velicina transistora:<br>${cpuList[i].tSize}nm</p>
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
for (let i = 4; i < coolerList.length; i++) {
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
                    <p class="comp-modal-text flow-text">Veličina:<br>${coolerList[i].size}mm</p>
                </div>
                <div class="col s6 m3 l3">
                    <p class="comp-modal-text flow-text">Cijena:<br>${coolerList[i].price}kn</p>
                </div>
        </div>`
}
for (let i = 0; i < mbList.length; i++) {
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
            <p class="comp-modal-text flow-text">Wifi:<br>${mbList[i].wifi}</p>
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
for (let i = 0; i < ramList.length; i++) {
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
}
//Aktivacija search funkcije
cpuSearch.addEventListener("input", () => {
    Search(cpuSearch, cpuList.length, "cpuName")
})
document.getElementById("coolerSearch").addEventListener("input", () => {
    Search(coolerSearch, coolerList.length - 4, "coolerName")
})
mbSearch.addEventListener("input", () => {
    Search(mbSearch, mbList.length, "mbName")
})
ramSearch.addEventListener("input", () => {
    Search(ramSearch, ramList.length, "ramName")
})
gpuSearch.addEventListener("input", () => {

})
storageSearch.addEventListener("input", () => {

})
psuSearch.addEventListener("input", () => {

})
caseSearch.addEventListener("input", () => {

})
fanSearch.addEventListener("input", () => {

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
    if (finalCooler == null || finalCooler.price == 0) {
        if (finalCpu.cooler.length > 2) {
            for (let i = 0; i < 4; i++) {
                if (coolerList[i].name == finalCpu.cooler) {
                    CoolerAdded("cooler" + i)
                }
            }
        } else {
            ResetCooler()
        }
    }
    //Kompatibilnost
    for (let i = 0; i < mbList.length; i++) {
        if (mbList[i].socket != finalCpu.socket) {
            document.getElementById("mbName" + (i + 1)).parentElement.parentElement.style.display = "none"
        } else {
            document.getElementById("mbName" + (i + 1)).parentElement.parentElement.style.display = "block"
        }
    }
    if (finalMb !== null && finalCpu.socket != finalMb.socket) {
        finalMb = null
        ResetMb()
    }
    priceOfCpu = finalCpu.price
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

    //Kompatibilnost
    for (let i = 0; i < ramList.length; i++) {
        if (ramList[i].stickNumber != finalMb.ramSlots || ramList[i].speed > finalMb.maxRamSpeed) {
            document.getElementById("ramName" + (i + 1)).parentElement.parentElement.style.display = "none"
        } else {
            document.getElementById("ramName" + (i + 1)).parentElement.parentElement.style.display = "block"
        }
    }
    if (finalRam !== null && (ramList[i].stickNumber != finalMb.ramSlots || ramList[i].speed > finalMb.maxRamSpeed)) {
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

//Reset funkcije
function ResetCpu() {
    cCpu.innerHTML = `
    <p class="comp-text center-align flow-text">PROCESOR</p>
    <i class="material-icons comp-icon medium">add_circle</i>`
    if (finalCooler.price == 0) {
        ResetCooler()
    }
    priceOfCpu = 0
    finalCpu = null
    //Prikazivanje kompatibilnih maticnih ploca
    for (let i = 0; i < mbList.length; i++) {
        document.getElementById("mbName" + (i + 1)).parentElement.parentElement.style.display = "block"
    }
    Price()
}

function ResetCooler() {
    cCooler.innerHTML = `
    <p class="comp-text center-align flow-text">HLADNJAK ZA PROCESOR</p>
    <i class="material-icons comp-icon medium">add_circle</i>`
    priceOfCooler = 0
    finalCooler = null
    Price()
    for (let i = 0; i < ramList.length; i++) {
        document.getElementById("ramName" + (i + 1)).parentElement.parentElement.style.display = "block"
    }
}

function ResetMb() {
    cMb.innerHTML = ` <p class="comp-text center-align flow-text">MATIČNA PLOČA</p>
    <i class="material-icons comp-icon medium">add_circle</i>`
    priceOfMb = 0
    Price()
}

function ResetRam() {
    cRam.innerHTML = `<p class="comp-text center-align flow-text">RADNA MEMORIJA</p>
    <i class="material-icons comp-icon medium">add_circle</i>`
    priceOfRam = 0
    Price()
}

function ResetGpu() {
    cGpu.innerHTML = `<p class="comp-text center-align flow-text">GRAFIČKA KARTICA</p>
    <i class="material-icons comp-icon medium">add_circle</i>`
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
    Price()
}

function ResetCase() {
    cCase.innerHTML = `<p class="comp-text center-align flow-text">KUĆIŠTE</p>
    <i class="material-icons comp-icon medium">add_circle</i>`
    priceOfCase = 0
    Price()
}

function ResetFans() {
    cFans.innerHTML = `<p class="comp-text center-align flow-text">DODATNO HLAĐENJE</p>
    <i class="material-icons comp-icon medium">add_circle</i>`
    PriceOfFans = 0
    Price()
}

//Cijena
let priceOfCpu = 0
let priceOfCooler = 0
let priceOfMb = 0
let priceOfRam = 0
let priceOfGpu = 0
let priceOfStorage = 0
let priceOfPsu = 0
let priceOfCase = 0
let PriceOfFans = 0
let totalPrice = 0

function Price() {
    totalPrice = priceOfCpu + priceOfCooler + priceOfMb + priceOfRam + priceOfGpu + priceOfStorage + priceOfPsu + priceOfCase + PriceOfFans
    cpuPrice.innerHTML = "Cijena procesora:<br>" + priceOfCpu + "kn"
    coolerPrice.innerHTML = "Cijena hladnjaka za procesor:<br>" + priceOfCooler + "kn"
    pcPrice.innerHTML = totalPrice + "kn"
}