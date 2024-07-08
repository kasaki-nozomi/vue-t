import { useStore } from "@/store"

window.onresize = () => useStore().setResize()