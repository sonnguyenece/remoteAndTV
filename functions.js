function Remote(product) {
    this.turnOn = function () {
        product.setStt();
    };
    this.changeChannel = function (numChannel) {
        product.channel = numChannel;
    };
    this.upVol = function () {
        product.volume++
    };
    this.downVol = function () {
        product.volume--;
    };
}

function Tv(channel, volume, stt) {
    this.channel = channel;
    this.volume = volume;
    this.stt = stt;
    this.volUp = function () {
        this.volume++;
        if (this.volume >= 100) this.volume = 100;
    };
    this.volDown = function () {
        this.volume--;
        if (this.volume <= 0) this.volume = 0;
    };
    this.upChannel = function () {
        this.channel++;
        if (this.channel > 9) this.channel = 1;
        main()
    };
    this.downChannel = function () {
        this.channel--;
        if (this.channel < 1) this.channel = 9;
        main()
    };
    this.setStt = function () {
        if (this.stt === "on") this.stt = "off";
        else this.stt = "on";
        main();
    }
}

let television = new Tv(1, 20, 'off');
let remote = new Remote(television);

function changeChannel(channel) {
    if (television.stt !== "off") {
        switch (channel) {
            case 0:
                document.getElementById("display").src = "image/off.png";
                television.channel = channel;
                break;
            case 1:
                document.getElementById("display").src = "image/Kirby.gif";
                television.channel = channel;
                break;
            case 3:
                document.getElementById("display").src = "image/megaman.gif";
                television.channel = channel;
                break;
            case 6:
                document.getElementById("display").src = "image/ghost.png";
                television.channel = channel;
                break;
            default:
                document.getElementById("display").src = "image/noSignal.png";
                television.channel = channel;
                break;
        }
        document.getElementById("channel").value = "Channel : " + channel;
        setTimeout(function () {
            document.getElementById("channel").value = ''
        }, 2000)

    }
}

function volumeUp(value) {
    if (television.stt !== "off") {
        if (value) television.volUp();
        else television.volDown();
        document.getElementById("volumeBar").value = "Volume: " + television.volume;
        setTimeout(function () {
            document.getElementById("volumeBar").value = ''
        }, 2000)
    }
}

function main() {
    if (television.stt === "off") {
        document.getElementById("volumeBar").value = "";
        document.getElementById("channel").value = "";
        document.getElementById("display").src = "image/off.png";
    } else {
        changeChannel(television.channel);
    }
}

main();
document.getElementById("volumeBar").disabled = true;
document.getElementById("channel").disabled = true;