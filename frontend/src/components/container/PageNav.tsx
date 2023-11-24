import { useState } from "react"
import { ContainerState } from "../../types/ContainerState"
import "./../../styles/pagenav.css"

type Props={
    state:ContainerState
    setState:(state:ContainerState)=>void
    itemCount:number
}
function range(start:number,end:number){
    let arr=[]
    for(let i=start;i<=end;++i){
        arr.push(i)
    }
    return arr
}
enum PageNum{
    DOTS=0,EMPTY=-1
}

/***
 * create list of page numbers with length = maxLen
 * page indexing start from 1
 * 
 * 0 : dots
 * -1 : empty space 
 */
function createPageList(currpage:number,lastPage:number,maxLen:number):number[]{
    let arr:number[]=[]
    if(lastPage <= maxLen){
        return range(1,lastPage)
    }
    else if(currpage >= lastPage - 3){
        arr = [1,PageNum.DOTS,...range(lastPage-4,lastPage)]
    }
    else if(currpage <= 3){
        arr = [...range(1,5),PageNum.DOTS,lastPage]
    }
    else{
        arr = [1,PageNum.DOTS,currpage,currpage+1,currpage+2,PageNum.DOTS,lastPage]
    }
    return arr
}

export function PageNav(props:Props){
    //zero indexed
    const lastPage = Math.floor((props.itemCount-1)/props.state.pageSize)+1

    const [maxLen,setMaxLen] = useState(7)

    //one indexed
    const pagelist = createPageList(props.state.currPage,lastPage,maxLen)
    
    function onClickNext(){
        goPage(props.state.currPage+1)
    }
    function onClickPrev(){
        goPage(props.state.currPage-1)
    }
    /**
     * 
     * @param page zero indexed
     */
    function goPage(page:number){
        if(page>=0 && page < lastPage) props.setState({...props.state,currPage:page})
    }

    return (<div className="pagenav">
        <div className="nav-label">
            <p>Showing data {props.state.currPage * props.state.pageSize+1} to {Math.min(props.itemCount,(props.state.currPage+1) * props.state.pageSize)} of {props.itemCount} entries</p>
        </div>
        <ul className="page">
        <li onClick={onClickPrev} className={"page__btn " + (props.state.currPage>0&&"active")}>{'<'}</li>
        {pagelist.map(n=>{
            if(n===PageNum.EMPTY){
                return (<li className="page__dots"> &nbsp;</li>)
            }
            else if(n===PageNum.DOTS){
                return (<li className="page__dots">...</li>)
            }
            else{
                return (<li onClick={()=>goPage(n-1)} className={`page__numbers ${n-1 === props.state.currPage && "active" }`}>{n}</li>)
            }
        })}
        <li onClick={onClickNext} className={"page__btn " + (props.state.currPage+1<lastPage&&"active")}>{'>'}</li>
    </ul>
    </div>)
}