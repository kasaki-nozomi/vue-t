import { useStore } from "@/store"

window.addEventListener('resize', () => useStore().setResize() )