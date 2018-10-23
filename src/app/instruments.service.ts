import { Instrument } from './instrument';

export class InstrumentsService {

  descriptions:string[] = [
    "Instrument de corda fregada. El més agut de la família. Té 4 cordes de diferent gruix que es freguen amb l'arquet per poder fer les notes. És un dels instruments més importants de tota la història de la música.",
    "Instrument de corda fregada. Té 4 cordes de diferent gruix que es freguen amb l'arquet per poder fer les notes. Sona més greu que el violí i com tots els instruments de corda fregada, també es pot tocar directament amb els dits fent el que s'anomena pizzicato.",
    "Instrument de corda fregada. Té 4 cordes de diferent gruix que es freguen amb l'arquet per poder fer les notes. Es toca assegut. El seu so és dolç i vellutat.",
    "Instrument de corda fregada. El més greu i gran (1,90 m) de la família. Té 4 cordes de diferent gruix que es freguen amb l'arquet, per poder fer les notes, o es pincen amb els dits (pizzicato).",
    "Instrument de vent fusta. Consta de 3 parts: cap (on hi ha l'embocadura), cos (on hi ha les claus) i peu. L'instrument sona quan es bufa per l'embocadura on hi ha un forat que es diu bisell. La flauta es construeix de metall (alpaca, plata, or) però antigament era feta de fusta.",
    "Instrument de vent fusta. Per poder fer so, consta de dues canyes o llengüeta doble. L'oboè consisteix en un tub cònic amb forats i claus. Està fabricat amb banús (una fusta de color fosc i molt densa: si la tiréssim a l'aigua no flotaria).",
    "Instrument de vent fusta. Per poder fer so, consta d'una canya o llengüeta simple. El clarinet consisteix en un tub cilíndric amb 17 forats i claus. El final de l'instrument acaba amb una campana o pavelló. Està fabricat amb banús.",
    "Instrument de vent fusta de llengüeta doble. El seu origen és molt antic i és l'instrument més greu i més gran de la família."
  ]

  links:string[][] = [
    ["http://www.rigiab.net/instrumentsmusicals/Material/violiAUDIOS.mp3","http://www.rigiab.net/instrumentsmusicals/Material/violiFOTOS.pdf","https://www.el-atril.com/orquesta/Instrumentos/Violin.htm"],
    ["http://www.rigiab.net/instrumentsmusicals/Material/violaAUDIOS.mp3","http://www.rigiab.net/instrumentsmusicals/Material/violaFOTOS.pdf","https://www.el-atril.com/orquesta/Instrumentos/viola.htm"],
    ["http://www.rigiab.net/instrumentsmusicals/Material/violoncelAUDIOS.mp3","http://www.rigiab.net/instrumentsmusicals/Material/violoncelFOTOS.pdf","https://www.el-atril.com/orquesta/Instrumentos/Cello.htm"],
    ["http://www.rigiab.net/instrumentsmusicals/Material/contrabaixAUDIOS.mp3","http://www.rigiab.net/instrumentsmusicals/Material/contrabaixFOTOS.pdf","https://www.el-atril.com/orquesta/Instrumentos/Contrabajo.htm"],
    ["http://www.rigiab.net/instrumentsmusicals/Material/flautaAUDIOS.mp3","http://www.rigiab.net/instrumentsmusicals/Material/flautaFOTOS.pdf","https://www.el-atril.com/orquesta/Instrumentos/Flauta.htm"],
    ["http://www.rigiab.net/instrumentsmusicals/Material/oboeAUDIOS.mp3","http://www.rigiab.net/instrumentsmusicals/Material/oboeFOTOS.pdf","https://www.el-atril.com/orquesta/Instrumentos/Oboe.htm"],
    ["http://www.rigiab.net/instrumentsmusicals/Material/clarinetAUDIOS.mp3","http://www.rigiab.net/instrumentsmusicals/Material/clarinetFOTOS.pdf","https://www.el-atril.com/orquesta/Instrumentos/Clarinete.htm"],
    ["http://www.rigiab.net/instrumentsmusicals/Material/fagotAUDIOS.mp3","http://www.rigiab.net/instrumentsmusicals/Material/fagotFOTOS.pdf","https://www.el-atril.com/orquesta/Instrumentos/Fagot.htm"]
  ]

  videos:string[][] = [
    ["https://www.youtube.com/watch?v=kT1ukwE2lMU","https://www.youtube.com/watch?v=oAlyQgykPyY","https://www.youtube.com/watch?v=RG7rx3BO6JY"],
    ["https://www.youtube.com/watch?v=RBQH09gvpWc","https://www.youtube.com/watch?v=mmyMI5nRFU8","https://www.youtube.com/watch?v=LT5XO_TmpsI"],
    ["https://www.youtube.com/watch?v=9NMEqi7LG6w","https://www.youtube.com/watch?v=poCw2CCrfzA","https://www.youtube.com/watch?v=D9LrEXF3USs"],
    ["https://www.youtube.com/watch?v=PGZOCrWVcTs","https://www.youtube.com/watch?v=Zook_bGHT3E","https://www.youtube.com/watch?v=kLvC1046t7w"],
    ["https://www.youtube.com/watch?v=bajhckRHMdE","https://www.youtube.com/watch?v=LI3wIHFQkAk","https://www.youtube.com/watch?v=nz5ouH8D6Fw"],
    ["https://www.youtube.com/watch?v=0T966F09Q_8","https://www.youtube.com/watch?v=N00JbKpZKKw","https://www.youtube.com/watch?v=u6I6nOyJvkc"],
    ["https://www.youtube.com/watch?v=3q_uru6k1hA","https://www.youtube.com/watch?v=v-pHCF9cle0","https://www.youtube.com/watch?v=s5RnxMyjhfA"],
    ["https://www.youtube.com/watch?v=En3ZQDepsno","https://www.youtube.com/watch?v=T9pjsCGnC6Q","https://www.youtube.com/watch?v=cws1hBT35m4"]
  ]

  instruments:Instrument[] = [
    new Instrument("el ","violí", "Corda", this.descriptions[0],"violi.png",this.links[0],this.videos[0], "orange lighten-5", "orange darken-5","orange-text text-darken-5", 0),
    new Instrument("la ","viola", "Corda", this.descriptions[1],"viola.png",this.links[1],this.videos[1], "orange lighten-5", "orange darken-5","orange-text text-darken-5", 1),
    new Instrument("el ","violoncel", "Corda", this.descriptions[2],"violoncel.png",this.links[2],this.videos[2], "orange lighten-5", "orange darken-5","orange-text text-darken-5", 0),
    new Instrument("el ","contrabaix", "Corda", this.descriptions[3],"contrabaix.png",this.links[3],this.videos[3], "orange lighten-5", "orange darken-5","orange-text text-darken-5", 0),
    new Instrument("la ","flauta travessera", "Vent fusta", this.descriptions[4],"flauta.png",this.links[4],this.videos[4], "cyan lighten-5", "cyan darken-5","cyan-text text-darken-5", 1),
    new Instrument("l'","oboè", "Vent fusta",this.descriptions[5],"oboe.png",this.links[5],this.videos[5], "cyan lighten-5", "cyan darken-5","cyan-text text-darken-5", 2),
    new Instrument("el ","clarinet", "Vent fusta", this.descriptions[6],"clarinet.png",this.links[6],this.videos[6], "cyan lighten-5", "cyan darken-5","cyan-text text-darken-5", 0),
    new Instrument("el ","fagot", "Vent fusta", this.descriptions[7],"fagot.png",this.links[7],this.videos[7], "cyan lighten-5", "cyan darken-5","cyan-text text-darken-5", 0)
  ]

  getAllInstruments() : Instrument[]{
    return this.instruments;
  }

  getInstrument(id) : Instrument{
    return this.instruments[id];
  }

}
