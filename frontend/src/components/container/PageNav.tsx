import { useState } from "react"
import { ContainerState, PageState } from "../../types/ContainerState"
import "./../../styles/pagenav.css"

type Props={
    page:PageState
    setPage:(page:PageState)=>void
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
    const lastPage = Math.floor((props.itemCount-1)/props.page.pageSize)+1

    const [maxLen,setMaxLen] = useState(7)

    //one indexed
    const pagelist = createPageList(props.page.page,lastPage,maxLen)
    
    function onClickNext(){
        goPage(props.page.page+1)
    }
    function onClickPrev(){
        goPage(props.page.page-1)
    }
    /**
     * 
     * @param page zero indexed
     */
    function goPage(page:number){
        if(page>=0 && page < lastPage) props.setPage({...props.page,page:page})
    }

    return (<div className="pagenav">
        <div className="nav-label">
            <p>Showing data {props.page.page * props.page.pageSize+1} to {Math.min(props.itemCount,(props.page.page+1) * props.page.pageSize)} of {props.itemCount} entries</p>
        </div>
        <ul className="page">
        <li onClick={onClickPrev} className={"page__btn " + (props.page.page>0&&"active")}>{'<'}</li>
        {pagelist.map(n=>{
            if(n===PageNum.EMPTY){
                return (<li className="page__dots"> &nbsp;</li>)
            }
            else if(n===PageNum.DOTS){
                return (<li className="page__dots">...</li>)
            }
            else{
                return (<li onClick={()=>goPage(n-1)} className={`page__numbers ${n-1 === props.page.page && "active" }`}>{n}</li>)
            }
        })}
        <li onClick={onClickNext} className={"page__btn " + (props.page.page+1<lastPage&&"active")}>{'>'}</li>
    </ul>
    </div>)
}