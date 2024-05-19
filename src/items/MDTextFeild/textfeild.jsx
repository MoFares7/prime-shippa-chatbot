import React from 'react'
import '../../feature/chat/presintition/style/textfeild.css'
import { TextField } from '@mui/material'

const MDTextFeild = ({ value, onClick }) => {
        return (
                <div class="input-group">

                        <input value={value} type="number" class="input" placeholder="Shipment Number" autocomplete="off" />
                        <input class="button--submit" value="Enter" type="submit" onClick={onClick} />
                </div>)
}

export default MDTextFeild
