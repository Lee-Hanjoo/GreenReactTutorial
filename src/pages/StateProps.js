// rafce
import React, { useState } from 'react'

const StateProps = () => {

   return (
    <div className='info'>
        <dl>
            <dt>State(업데이트)</dt>
            <dd> import {useState} from 'react'  </dd>
            <dd> let [변수,변수수정] = useState(값) </dd>
            <dd> 변수값이 변경되었을때 DOM을 업데이트하고싶을때 사용</dd>

            <dt>Props</dt>
            <dd>
                부모컨포넌트에서 자식컨포는트로 값을 보내줄때 사용<br/>

                <textarea cols="60" rows="7">
                    {
`#부모컨포넌트
<컨포넌트명  data=100  />

#자식컨포넌트
function 컨포넌트명({data}){
    //data는 부모쪽에서 넘어온 100이다
}
`
                    }
                </textarea>
            </dd>
        </dl>
    </div>
  )
}

export default StateProps