import React from 'react'
import '../../feature/chat/presintition/style/textfeild.css'
import { TextField } from '@mui/material'

const MDTextFeild = ({ value, onClick, onChange }) => {
        return (
                <div class="input-group">

                        <input value={value} onChange={onChange} type="text" class="input" placeholder="Shipment Number" autocomplete="off" />
                        <input class="button--submit" value="Enter" type="submit" onClick={onClick} />
                </div>)
}

export default MDTextFeild
