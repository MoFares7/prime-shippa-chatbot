import React from 'react'
import '../../feature/chat/presintition/style/textfeild.css'
import { TextField } from '@mui/material'

const MDTextFeild = () => {
        return (
                <div class="input-group">

                        <input type="number" class="input" placeholder="Shipment Number" autocomplete="off" />
                        <input class="button--submit" value="Enter" type="submit" />
                </div>)
}

export default MDTextFeild
