import Project from '@/utils/project'

export default [
    {
        id: 1,
        symbol: Project.Scene.symbol,
        title: Project.Scene.title,
        image: new URL('@/assets/images/business/list/01-scene/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/01-scene')
    },
    {
        id: 2,
        symbol: Project.Character.symbol,
        title: Project.Character.title,
        image: new URL('@/assets/images/business/list/02-character/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/02-character')
    },
    {
        id: 3,
        symbol: Project.TianGong.symbol,
        title: Project.TianGong.title,
        image: new URL('@/assets/images/business/list/03-tiangong/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/03-tiangong')
    },
    // {
    //     id: 4,
    //     symbol: Project.MiJing.symbol,
    //     title: Project.MiJing.title,
    //     image: new URL('@/assets/images/business/list/04-mijing/cover.jpg', import.meta.url).href,
    //     list: () => import('@/resource/business/list/04-mijing')
    // },
    {
        id: 5,
        symbol: Project.DaYe.symbol,
        title: Project.DaYe.title,
        image: new URL('@/assets/images/business/list/05-daye/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/05-daye')
    },
    {
        id: 6,
        symbol: Project.BaoZha.symbol,
        title: Project.BaoZha.title,
        image: new URL('@/assets/images/business/list/06-baozha/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/06-baozha')
    },
    {
        id: 7,
        symbol: Project.ShuaiTu.symbol,
        title: Project.ShuaiTu.title,
        image: new URL('@/assets/images/business/list/07-shuaitu/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/07-shuaitu')
    },
    // {
    //     id: 8,
    //     symbol: Project.TengXun.symbol,
    //     title: Project.TengXun.title,
    //     image: new URL('@/assets/images/business/list/08-tengxun/cover.jpg', import.meta.url).href,
    //     list: () => import('@/resource/business/list/08-tengxun')
    // },
    {
        id: 9,
        symbol: Project.ZhenXi.symbol,
        title: Project.ZhenXi.title,
        image: new URL('@/assets/images/business/list/09-zhenxi/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/09-zhenxi')
    },
    {
        id: 10,
        symbol: Project.ShenMiFuSu.symbol,
        title: Project.ShenMiFuSu.title,
        image: new URL('@/assets/images/business/list/10-shenmifusu/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/10-shenmifusu')
    },
    {
        id: 11,
        symbol: Project.YinYangShi.symbol,
        title: Project.YinYangShi.title,
        image: new URL('@/assets/images/business/list/11-yinyangshi/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/11-yinyangshi')
    },
    {
        id: 12,
        symbol: Project.DaYu.symbol,
        title: Project.DaYu.title,
        image: new URL('@/assets/images/business/list/12-dayu/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/12-dayu')
    },
    {
        id: 13,
        symbol: Project.WuXiaMeiShu.symbol,
        title: Project.WuXiaMeiShu.title,
        image: new URL('@/assets/images/business/list/13-wuxiameishu/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/13-wuxiameishu')
    },
    {
        id: 14,
        symbol: Project.MaiYa.symbol,
        title: Project.MaiYa.title,
        image: new URL('@/assets/images/business/list/14-maiya/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/14-maiya')
    },
    {
        id: 15,
        symbol: Project.TVC.symbol,
        title: Project.TVC.title,
        image: new URL('@/assets/images/business/list/15-tvc/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/15-tvc')
    },
    {
        id: 16,
        symbol: Project.DuanPian.symbol,
        title: Project.DuanPian.title,
        image: new URL('@/assets/images/business/list/16-duanpian/cover.jpg', import.meta.url).href,
        list: () => import('@/resource/business/list/16-duanpian')
    }
]
