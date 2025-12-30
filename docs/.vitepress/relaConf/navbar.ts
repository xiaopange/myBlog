// navbar 配置
import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
    {
        text: '首页',
        link: '/'   // 表示 docs/index.md
    },
    { 
        text: '案例', 
        link: '/markdown-examples' 
    },
    {
        text: '个人成长', 
        items: [
            { 
                text: '大江南北游记', 
                link: '/column/Travel'  // 表示 docs/column/Travel/index.md 
            },
            {
                text: '所思、所想',
                link: '/column/Growing'  // 表示 docs/column/Growing/index.md
            }
        ]
    },
    {
        text: '关于我',
        items: [
            {
                text: 'Github',
                link: 'https://github.com/Jacqueline712'
            },
            {
                text: '掘金',
                link: 'https://juejin.cn/user/3131845139247960/posts'
            }
        ]
    },
    {
        text: '前端开发',
        items: [
            {
                text: '数据结构与算法',
                link: '/column/Algorithm/'  // 对应 docs/column/Algorithm/Introduction.md文件
            }
        ],
    }
];
