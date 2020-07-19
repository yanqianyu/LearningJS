# LearningJS

## Flappy Bird
参照[Flappy Bird](https://github.com/tzc123/canvas_game)的Flappy Bird，大致的知识点类、DOM事件、定时器、canvas

- [ ] 几个知识点的加深理解
- [ ] var that = this的作用（闭包，this指针）
- [ ] 目前还有几个常量不是很理解，玩起来速度有点快

## JavaScript30
1. Day 1: JavaScript Drum Kit
- [ ] HTML data-* 属性
- [ ] 模板自变量
- [ ] animation, 在transition动画结束后触发transitionend
- [ ] forEach 和 箭头函数 
- [x] 播放音乐前重制音乐，否则连续点击时，会出现只有第一次有声音，第二三次没有声音的情况

2. Day 2: JS + CSS clock
- [ ] setInterval
- [ ] transform: rotate, transform-origin
- [ ] 秒针角度骤变问题

3. Day 3: CSS Variables
- [ ] 知识盲区 全局CSS变量
- [ ] CSS variable

4. Day 4: Array Cardio Day 1
- [ ] Array.prototype下的一系列用法

5. Day 5: Flex Panel Gallery
- [ ] flex布局
- [ ] css first child
- [ ] toggle
- [ ] text.html中的效果会出现多个div同时放大的情况 => 在触发open之前先清除
- [ ] open触发的动画结束后触发的事件名称在safari和chrome上不一样

6. Day 6: Type Ahead
- [ ] fetch api
- [ ] ...运算符
- [ ] regexp正则表达式

7. Day 7: Array Cardio Day 2
- [ ] some 和 every

8. Day 8: Fun With HTML5 Canvas
- [ ] Canvas
- 使用canvas进行画线，使用 beginPath()开始绘制新的路径，使用 moveTo()移动画笔至路径的起始点，使用lineTo标识路径的终点，使用 stroke() 方法真正-地画线。
- ctx.beginPath();是 Canvas 2D API 通过清空子路径列表开始一个新路径的方法。 当你想创建一个新的路径时，调用此方法。
- ctx.moveTo(x, y);是 Canvas 2D API 将一个新的子路径的起始点移动到(x，y)坐标的方法。
- ctx.lineTo(x, y);是 Canvas 2D API 使用直线连接子路径的终点到x，y坐标的方法（并不会真正地绘制）。
- ctx.stroke();是 Canvas 2D API 使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法。
- ctx.closePath();是 Canvas 2D API 将笔点返回到当前子路径起始点的方法。它尝试从当前点到起始点绘制一条直线。 如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作

9. Day 9: Dev Tools Domination
- [ ] console的一些用法

10. Day 10: Hold Shift and Check Checkboxes
- [ ] 选取的逻辑
- [ ] slice

11. Day 11: Custom Video Player
- [ ] video的相关属性

12. Day 12: Key Sequence Detection
- [ ] window对象

13. Day 13: Slide in on Scroll
- [ ] 防抖和节流
- [ ] call
- [ ] apply
- [ ] window.scrollY表示浏览器当前的在Y轴上滚动的距离（未滚动时值为0）
- [ ] window.innerHeight表示浏览器的内部视图窗口的高度值

14. Day 14: JavaScript References VS Copying
- [ ] 变量引用和复制
- [ ] 基本类型按值操作，而对象类型由引用操作
- [ ] 基本类型有String Number Boolean Null Undefined
- [ ] 如果复制的对象也包含对象，那么只能复制到第一层。 任何比第一层更深的值仍然是原对象的引用 -> 需要深拷贝，或者转成JSON字符串