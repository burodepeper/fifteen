// Source: https://github.com/veu/mini-tetris/blob/master/src/tetris.js

M=e=>P&&(
    h=0,
    p=P.map((v,i)=>(
        x=eval(e[0]),
        i%2
            ?b[h|=x<0|x>9|b[y]>>x&1|y>17,y]|=1<<x
            :0,
        y=x
    ),b=[...B]),
    h
),
b=C=Array(18),
S=P=k=0,
D=e=>b.map(v=>{$+=`
`;for(x=10;x--;)Z.innerText=$+='□■'[v^1023+P&&v>>x&1]},$=S,P=p),
(_=e=>D(
    P=P||[...'021213030405061617'.substr(
        new Date%6*2,
        8,
        s=0,
        B=[...C,...b].filter(v=>v^1023||!(S+=++s)).slice(-18)
    )],
    M`v-~i%2`&&M`v`&(p=k=0),
    setTimeout(_,k-2&&200)
))(
onkeydown=e=>
    (k=e.which-38)%2-k
    ||M`k?v-i%2*k:P[2]-(P[q=i^1]-P[3])*(i-q)`
    ||D()
)
