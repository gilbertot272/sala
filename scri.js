

var imgdata =''
function encodeImage(image){
    var img = image.files[0]
    var file= new FileReader()
    file.onloadend = function(){
    imgdata = file.result
    console.log(file.result)

    }
    file.readAsDataURL(img)
}


function pdfexport(){
    
    //Estos campos como tlt,lbname corresponden a los id de html es decir label
    //Mientras que lname son variables para guardarlas
    var ltitle = document.getElementById('tlt').innerText,
    nombrev = document.getElementById('nombre').innerText,
    edadv = document.getElementById('edad').innerText,
    fechav = document.getElementById('fecha').innerText,
    desv = document.getElementById('des').innerText,
    fallav=document.getElementById('falla').innerText,
    filev=document.getElementById('file').innerText,
    elementonev=document.getElementById('one').innerText,
    localv=document.getElementById('local').innerText,
    cpv=document.getElementById('cp').innerText,
    elementocav=document.getElementById('elementoca').innerText;

   

    
// aqui  son lo que guardamos en la entrada de datos 

    var inom = document.getElementById('nom').value,
    ieda = document.getElementById('eda').value,
    ifech = document.getElementById('fech').value,
    ides = document.getElementById('desc').value;
    iopc = document.getElementById('opc').value;
    iopc2 = document.getElementById('opc2').value;
    ielec = document.querySelector('input[name="electricidad"]:checked').value;
    icable = document.querySelector('input[name="cableado"]:checked').value;
    icp= document.getElementById('cp').value;
    

    String: fav ="Falla";
    String: dire="Calle Hermilo Mena s/n , Col. Lázaro Cárdenas La presa,\nTlalnepantla de Baz, Estado de México, C.P.54187";
    String: espa="";
    String: foli="No.Folio:"
    String: Estado="Estado:"
    String: Cp="Codigo postal:"
    String: folio = ieda*2;
  

window.jsPDF = window.jspdf.jsPDF;
 
// var doc = new jsPDF();
 
 var doc = new jsPDF();
 
 doc.setFontSize(16);
 doc.setFont('Montserrat');
 doc.text(ltitle,14, 15);
 
 doc.setFontSize(16);
 doc.setFont('Montserrat');
 //doc.text(ifech,14,25);
 doc.setFontSize(12);
 doc.text(dire,14,48);
 doc.text(fechav+espa+ifech, 145, 14);
 doc.text(foli+espa+folio+folio+icp, 145, 20);
 //140, 10, 60, 30

// doc.text(elementonev  + '' + ielec ,14,90);

 var imgdata3="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/4QBaRXhpZgAATU0AKgAAAAgABQMBAAUAAAABAAAASgMDAAEAAAABAAAAAFEQAAEAAAABAQAAAFERAAQAAAABAAAWJVESAAQAAAABAAAWJQAAAAAAAYagAACxj//bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAH0AyAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP2g1XwXpfjn9pnUrXVrKG+gi0WKREkzhW8zGeD6E1hIvgi91O/t7D4batqY065e1lltYN6B1ODzv/H8a7DSf+TqNW/7AMX/AKMrE+FGozaR4U+Jl1bv5c9tqd5LG+M7WWPIP5igZn/2V4X/AOiSeJP/AAD/APs6P7K8L/8ARJPEn/gH/wDZ1f0K71uX4daVr+r/ABGk0mLUokb97YwbFZgTtBI56Go/+Ext/wDostr/AOAltQBU/srwv/0STxJ/4B//AGdH9leF/wDokniT/wAA/wD7Orf/AAmNv/0WW1/8BLaj/hMbf/ostr/4CW1AFT+yvC//AESTxJ/4B/8A2dH9leF/+iSeJP8AwD/+zq3/AMJjb/8ARZbX/wABLan2/imO6nSOP4xW7yOwVVW0tiWJ4AoAo/2V4X/6JJ4k/wDAP/7Or/gnwl4E+Idjrgg8HnTbnRv3c0d2m10cqSOAx6YrU0O/8Q+F/jnp2g3/AIhm1myvNNlu2ElrHDhg20fdGe3r3qD4S/8AI4fFP/sIf+02oGbP7Lxz8DND/wB2X/0a9d49wkTAM6qT0BOM1wX7Lv8AyQvQv92X/wBGvXaaz4fsPEVt5OoWVpfQnqlxCsi/kQaTvbQceXm9/YuUV5xrv7J3gXW3Z00q60qZh/rNJ1O605lPqPIkQZ/CuB8V/sbeONGiabwB8c/iDodwnMdrrrxa7Zk9gfOXzAP+BmuGriMTT19lzL+7JX/8m5V+J7+Ey3KsQ+R4z2T71KclH76bqS/8lPoWivz8+M37Vn7V37FbNe+NNC8IeN/DEbbTrNlZukOO3mGJlaEn1ePbnua0vhT/AMF3fB+tyRQ+MfCGt+HnIAa5sJV1CAH124SQD6Bq8lcWZfGr7HEt0p9pxa/HVfO59hLwe4jq4VY7LIwxdJ/aozjP5cr5Z38uW66o+8aK80+Ef7UfhP8AaK0mS8+H3iHQfEZgXdLaNO9tcwf76FS6fUpiqXjv9qOT4QxGbxb4E8a2VgmS+o6XZrrFnGo/ibyGMqD3aIV9XgKEsalLCNTvtZp39FfX5XPynOJvKasqOZwlRlHfmjJW/wAV17vzsesUV5p8KP2x/hd8bmVPDPjnw9qNy5wLRrkQXWfTyZNsmf8AgNel1WJwlfDT9niIOEuzTT+5mOEx2GxdP2uFqRnHvFpr70FFFFc51BRRRQAUUUUAebaT/wAnUat/2AYv/Rlc98Of+RD+Kf8A1/33/oquh0n/AJOo1b/sAxf+jK574c/8iH8U/wDr/vv/AEVQMo66gl+Afw0VgGVtSsQQRkEfN1r2j/hFNL/6Bth/4Dp/hXjGtf8AJBvhn/2E7H/2avd6AZn/APCKaX/0DbD/AMB0/wAKP+EU0v8A6Bth/wCA6f4VoUUCM/8A4RTS/wDoG2H/AIDp/hXnn7Suh2WneCdNkt7O1gf+2LQbo4lU43HuBXqdeb/tQDd4E03HP/E5tP8A0I0AN17/AJOq0L/sBT/+jDVH4S/8jh8U/wDsIf8AtNqv66hP7VGhHBx/YU/OP+mlUvhOhTxf8UiQQDqHBPGf3bUDua37Lv8AyQvQv92X/wBGvXoFeX/s6+LtJ8PfAvQ/t+qadZYSUnz7lI8fvX9SKf4v/bQ+EvgNW/tX4j+DrYr1RdVilcf8BQk/pWFXFUaSvVml6tI78LlWOxcuXC0Zzf8Adi3+SPTaK+XfHP8AwWJ+BHgxW8nxLf69Iv8ABpmmTPn6NIEX9a8H+JP/AAXeutYle1+Hfw+kuXJKpc6tOZGP/bCDJ/8AIleLiuK8pofFWTfaPvflc+5ynwh4vzB/usDOC71F7Nf+T2f3Jn6C+Odb0bw74P1K98RXGn2uhQW7tfSXxUWyw4w2/d8u0g4weucV+BPxmvfD2o/F7xRceEoWt/C82q3L6TEy7dlqZGMYAPIG3GAegxXs3xNu/wBpX9uXUUbV9B8d65YmQSQWMOlyWWmW57EIQseR/eclveu1+FP/AARR+LfjlUm1+48P+DbdsErdXBvLnH/XOLK5+rivzziHGYvPpwhgsNLljeza1d/PZLyuf0n4b5Jk/h7QrYjPM0p+1qpJwjO6jbtH45S135VZaLe58o+DvGurfDjxRZ65oOpXmj6vp7iS3u7SQpLG3pkdQe6nIPQg1+9n7PHi3XvHvwK8Ja14nsP7M8Q6ppVvc6hahdnlTMgLDaeV9cds47V4h+yv/wAEnvhv+zdqdnrV6tx4y8T2hDxX2pKBBbP/AHooB8qkdmYsw7EV7D8af2qPh7+zzp8k/i/xZo+jui7havOHu5f9yFcyN+C19nwJwpmOFlKMrylO1oRvL56demn3n4t48+K3D+feyWDiowo3vWnaF0/sq+vL196zvslrfxD/AIKK/wDBOnwd+0D8O9d8WabY22heOtIspb2G/tgIk1AxqX8u4A4bIUgP95SRyQMV+bn7Pv8AwUU+LX7Ok8K6N4pu9S0qPGdL1dje2pX0UMd0f/AGWveP28v+Cwl18dvCmoeDPh7Y3mieHdRUwX+p3RC3t/CeDGiAnykboSSWYHHy5IPxN4d8Oah4u1q303SrG81LULpgkNraQtNNKT2VVBJr+1+BeHcZDJ5YbiKKlC94xnaTjG3W97eS+z5H+XHiVxZgKmfQxXCc3Colac6d4qcr6WStzebt73nu/wBsP2Cv+CgOhftueF7xY7M6H4q0VEbUdMaXzFKNwJoWwC0ZbI5GVOAeoJ+g6+Hf+CRn/BPvxJ+zXd6p488aKdN13XNP/s200kOGe0t2kjldpiMgSM0UeFB+UA55OB9xV/P/ABhhstw+a1aWUy5qStbW6Ttqk+qT2f4vc/qTgLGZvisko188hy13e+lm1fRtdG1uvwWwUUUV8yfYBRRRQB5tpP8AydRq3/YBi/8ARlc98Of+RD+Kf/X/AH3/AKKrodJ/5Oo1b/sAxf8Aoyue+HP/ACIfxT/6/wC+/wDRVAzP8QO0fwC+GhRPMYalY4XcFz97ueK9Z1Xx1caJBvuPD2uyc8/ZY47jH4K+79K8n1+ZLf4A/DWSRlRE1GxZmY4CgbskmvYf+Fg6D/0G9I/8DI/8a0hKK+KNzKrCcvglb7jk9a/ai8K+FoDLrEfifR4x1e78OX6oP+BCErj3zWXbft0/CC4xu+IPhy0zwPtlx9l/9GBa9A/4WDoP/Qb0j/wMj/xqG98Y+GdShMdxqmhTxnqslzEwP4E12wq4C3v0538pr8uR/mebUo5nf93Vhbzpy/NVF+Rz1p+1d8Lr6IPF8SPAbqe41+1/+OV51+0n8Rfhl418I2Mtt4i8D6lcDVbYO8Op20jhCx3ZKvnHrXd6t8OPhBr8jPfaD8N7x2+809lZSE/iVryn9oT9mn4KXXhixOl+CvhybyTVLZH+xafarI0ZbDA+WAcetb8mTzVp+0Xyg/8AIwhV4hpS5qLpffOP5cwzxX4U+D2sftCaVE994X/s6TSJmleHXPKHmb+PmSUYOO2a5Pwz8DfgHr/iDx4Nan8Nm3tb3bZGTxRLGrLsbuLgbuccnNdL4l/YC+DFx+0NpOkH4ceG00650ia4kgihaJWkD4DYVhzisf4c/wDBOz4Ka14m+IEN18PtJmi0e98qzUyz4gXYxwPn9RUPKuF5/wAVVH/3Cpv/ANvPQp8U8eUH/s1aMfSvWX5QOR+F3wB/ZCu/hlpt34pPw6/tSRXNwbnxGwkyHYDK+f6Adq1U8LfsL+E2yp+FzbOwvHuh+W5s11nwB/4JwfBDxd8JdJ1DUfh7pNzeXCyeZK00+XxIwHST0ArubP8A4Jm/AexbKfDTQG/66GWT/wBCc1pTyTgmOsqVRvyp0V+rCtx14pzXIsdG3nXxL/yPJo/2k/2K/h7AXtIfh2xj6LbeGWuH/D9wf51Xuv8Agsx+z/8ADyFo9A0rXZ9gwq6bokVqjD/gbJ/KvfdN/YQ+DOkkeT8MPBXHTzNKik/9CBrotO/Zn+HGkAfZfAHgu3x08vRLZcf+OV6eHXCGH1p4arL/ALehH/0mJ83jsV4g4/TE42iv+3as3/5PO34Hxd4g/wCC++iSuY/D/wANtb1GQ8J9q1GOHP8AwGNJDXI63/wVS/aO+LX7rwP8K302NzhJYNEvNRlH/A2Aj/8AHa/SHRfA+i+GhjTtH0uw/wCva0ji/wDQQK1a9OHEvD9B3w2VpvvOpKX4WseBU4Q4oxSti85kl2p0ow/8mvc/JrV/B37b/wAfopLe9/4Tq0tLx2Z42urfRogGOdpCtG20ehzxU3gb/ghf8UvGE/2vxR4l8M6E8zbpcyy6hcn1JwFUn/gZr9X6K7P+Io5lRh7LL6NKgv7kP821+Bwf8QYymvU9tmuIrYmX9+pp+CT/ABPhn4Wf8EIvh34ZlSbxV4k8ReKZFwTDDt0+3b1yF3SY+jivq/4Ofs3eBP2ftONt4N8K6PoCsNsktvAPPmH+3Kcu/wDwJjXb0V8lmvFGbZlpja8pLte0f/AVZfgfc5JwZkeUa5dhoQl3teX/AIE7y/EKKKK8E+mCiiigAooooA820n/k6jVv+wDF/wCjKxfhLpk2teFviXaW6h57rVLyGJScbmaPAGfqal1rxrpvgL9pbUbvVrg2ttNosUSP5TuGbfnHyg9gaxhdfDuDUb24tfGfifTzqFw9zMlrNNEjOxyTgRUDNjw9pfinT/AOl6DqPw/0/VodNiVAZ9UgKsygjdtIODyaX/hFr3/okXh7/wADrb/4isn+2PA3/RQvGv8A4GXH/wAbo/tjwN/0ULxr/wCBlx/8boGa3/CLXv8A0SLw9/4HW3/xFH/CLXv/AESLw9/4HW3/AMRWT/bHgb/ooXjX/wADLj/43R/bHgb/AKKF41/8DLj/AON0Aa3/AAi17/0SLw9/4HW3/wARTofDmoW8qunwl0BHQhlZb+2BBHQ/crH/ALY8Df8ARQvGv/gZcf8Axuj+2PA3/RQvGv8A4GXH/wAboA6bQ9D8T+Ivjbp/iDVdCj0i0s9Olsztvo7gszNuB4we/p2qr8Jf+Rw+Kf8A2EP/AGm1Yf8AbHgb/ooXjX/wMuP/AI3V/wAH+OPh/wDD6w1n7D4g1C8uNY/eTSXiSyu7hSAc+WOue9AHS/su/wDJC9C/3Zf/AEa9egVwH7MCGP4G6GGBUhZcgjH/AC1eu/oJCiiigAooooAKKKKACiiigAooooAKKKKACiiigD4h/bm/4KneJP2Vf2jpfA2keDNH15PsltPFNNcyrNK8wPyBVB74A9c1zkv/AAU2/aDtoy8n7OGqhF64sb//AONV4J/wV21qPw1/wUYh1GVXeLT7PSrp1T7zKh3EDPfAr6Ok/wCC+Xw6CHZ4N8Zs3YH7MM/j5tfuq4apRyrBV8FlixEqkE5vmkrOy/vLfU/muXGFaed5jhcxziWFjSqONNKEZXV3/db00LH7N3/BZ7SfiL8UrTwh4+8HTeCdQvrlbKK6E5lhiuGIVY5kdEeLJOM8gEjOByPr/wCMXxP0j4IfC7XfFutssWmaDZvdzer7R8qL/tM2FHuwr8gte0rxf/wU+/bYk8ReGfCN5pNlql1aieYIWg023hCIZppsBS+1c4HJOFGa97/4Lb/tNtrviDQvg1ot5GFieG/1yR5Qiea3FvDIx4AUHzWzxzGe1cebcC4Kvm+DweDj7KVSPNWgpc3s0rN6673aXS9jvyPxKzDDZFmGPx8/bRpz5MPUceT2rldL3bJaWUn1s3fY0vgT/wAFxLzxz8YPD2j+K/Bui6D4f1q7FpNqEN3I7Wm8lUc7lClQ+0Mewye1fW/7aHxd8c/AP4STeK/BPhbSvFiaTul1WyuJJI547cDmaIIDu2clh128joa+DP28vg38IrD9i3wPaeCfHXgrV/E/w5hFvcR2WqwST6vFOwNwyqrbmYTHzAOyl6+tv+CVX7VY/ab/AGZrWz1O4E/ifweE0rUw5y9xGF/cTn13oME92R64+JMny6GGpZ9luFtShNwqU5cyur+7LV3XMrarZtdmehwjxBmtTGVuGs2xilXqU41KVWHI7O3vR00bi09HulJ6XRpf8E+/2+tH/bb8G3ols7XRPF2jtm+0tJfMVoSfkniJALIeh7q3XgqTzn/BQr/gphpv7Gup6b4f0TS7LxN4uvMT3NnLMUisLc52mQqCd7nG1fQEngrn5m/4KAfs2ax/wTt+OulfGj4W3MelaNqd8Ynsx/q7C6kVmaHZkb7eVVc7f4SCOPlx0H/BK/8AY1uf2hvGNx8fPiTcf25Jd6hLcaTBOwk+13SuVe6lHQLGylY07Fc4AVc7Phvh+lF8SSlzYNr3aV3ze0d/3bfZb3vt3Su+aPFvFFaa4RjHlx6fvVrLk9krfvUu7Tta2/Zuy9Y+Pn/BQr4kfs3/ALMvg/xt4n8A+HbPXPF2oNEujm6mBsbbyt6GQ4yJTjJX+EEA85A4Dwx/wVY+OfjbQbbVNH/Z/uNU0y9Xfb3dpb3s0M65IyrrGQRkEcelbH/BfP8A5Ih4E/7Dsv8A6TtXmn7KP/BTvxp8EP2dPC/hfTvgtr/iOw0W0aKLVIJLgRXa+Y7Fhtt2XAyRwx6V2ZTkeExWRU8yw+AhUqznJNObglG7tZuavayXfqcOecSY3B8S1cpxWZ1KNGnTg1KNNTcpWje6UHa92+y2O0tv+C1/in4aeKLWx+Jfwd1Lw5bXHJMck1vcKmcF0injUSY9mH1r7V1v9o7wd4d+BK/Em81iGHwg9hHqSXpB/eRSAFAq9S7FgoXGdxx1r8r/ANob9pnx/wD8FbPGPhvwn4Y8B2trNoTTXUcMF35sgEmxGkllcIqRrhc4HU9+BXrX/BU/wLqP7Of7Avwb+HTXn2mOxuRFqEseRHPNFAzYHfbvkcjP90VOacGZdWxGBwjprDYirJqpTjPntBJu+rdm0tOmvWxWS+IOa0MLmWPjVeLwtGCdOrOnyXm2ly6JXSb162XS51l1/wAFqfEXxN8U3Gn/AAt+DmteJ47fnzJZJJJivZmigjYRg+7mrf8Aw8j/AGj/APo2/Vev/Prff/G68X/YN/ak+MPwG+AdtpvgL4F3XivSLy7mupNags7p/wC0JCxU5aNSp2BQg542+ua9pH/BRX9pnP8AybZq3/gDff8AxNdOYcO4XDYieHwuX0ZQi7Jzr+87dWudW9Ohy5VxXjcXhIYrG5nXjUmruNPDe6r9E+R3t3vqe6ftof8ABQPQf2LvA+iXOraXdat4j8QxF7TSYJBFgKF3vJIwOxFLAdCSeg4JHzr4d/4K1fG3x9pq6l4e+AN9qWlz/NDcQRXtxHIPaRYgrfhWr/wV9/Yv8c/tIWvhDxp4S0mbWLzSdPay1LSoWAuY1dhIrxqxG/DFlZR833cA84534Yf8FFPj38Kvh7ovhq8/Z61u+k0Gyi09Z0sb228xIkCKSghYA4UZwcZ6AdK8zJMjyyeTUsRhaFPEYiTfOp1eTl1dklzLy/PXp6/EXEmc0s/rYXG4mrhcLGMfZuFH2nPdK7cuWWt76dNtLa7Z/wCCm37RAH/JuWrf+AV//wDG6+2fg74s1Tx58KfDuta1pb6Hq+qafDdXmnurBrKV0BaIhgG+UkjkZ4r4V1T/AILY+M/hrq1snjf4I6loVtcH5fNu5raVwOpQTQANjPTP5V9neAf2m/CfxC/Z3h+J9retb+Fm0+TUZpbhQklqkW7zUcZ++pRlwCckcZyK+f4tyfEUaNKX9nxoqUrKUJuak/5fikvTufU8D59hMRiK0P7UniJQjdwqU1TcV/N8MW136K54x/wUU/4KP/8ADFmpeHtF0XR7LxH4j1kNczWs87Rra2w+VWO0ElnfIUeiN7Vq/wDBOv8A4KARftu+GtdW/wBNtNC8S6BOpmsYJjIkts4+SVSwB+8GVh2IX+8K+Iv2Tvib4e/an/4KG6v8V/ib4i0Hw/pGjynULC11a+jgDMP3dpAgcjcIlG9sfxKM/erE1H4paF+wV/wUffxR4H13Ste8B6lcefMNKu0uYhYXLfv7c7CRuicFlB/uRnvX2E+BcC8FLJ4Un9djTVT2mtnK93T/AJdrJff0Z8DT8S8xWYRz6pXX9nzrOl7P3eZQtZVf5viu36W6o/Yuiq2j6vbeINItb+ynjubO9hS4t5ozlJY3AZWB7gggj61Zr8Naadmf0impK62CiiikMKKKKAPy4/4KY/Arxr44/wCCiWm6vpHg7xNrGjqmkh7y00qa4thscbwXVSvA688d6/TUeDtIB/5BWnf+Ayf4Vx3xC8EeM9Z8Yy3eh61DY2Mln5CpLdOBE+18ssQjK5JK/OzNjGQvGDSt/A/j+1fVY4tTso7S/s5YbRZNVmnk0qUgbHDtBum+bJyxUqGwN2BX2ubZxLMcFhMNKUYewhy7u72389Pz8r/nmSZDDKcxx2LjCc3iZ8zulZWvt5a9fLpe3VfFPxl/wqX4W63rdppF7qsmk2ck8Gm6dbNLPeSAfJEiICSWbA4HGc9q/NH9ij/gn/r/AO2N8b/GvjD426D4o0uymZrlo7qGbTpb68nct8m4BvLjRSMDgZQdq/QuTwZ44vfEL3txf2ggnlMkdnDq00cencoOCIB9oBCk7XCAEkDOdwyrn4VfES904QHxSLW6YIsuoQ30hYpiMFFgaLYrAqxEmSW6MAGO3XIs6nleFrUcLOMalWy9pd80Uuit87v0aulcw4l4ep51jcPiMZSnOjQ5mqVlyzb2cr/Ky2WqbTbR5Z/w5a+BP/QJ1/8A8HE1fLX7OHwq+JH/AATz/wCCgN7bWfhLxjrfgW5vDpd3e2WlT3MFzp8rBoZ9yKVLxZRmxyNsg71986f8OPiQdcv57/XrKaO4gmjg+zajPALdy9xsdYzEy/deHqW2lSBuABN+XwJ8QH8FaZZQ67p1rf2V1JdTzmeac3SqcxQM5UNtbJ3tjIwMKe3oYTi7HU6dXDY7ELEU6seVqcpNL+8nq016b2fRHmY/gbLq1WhjMtwrwtWjLnThGKbtZcslomnvvsmurPEf+C0Xw+1/4lfsraTYeHNE1fX71PEdvM1vp1nJcyrGILgFyqAnaCQM+4rsP+CUvg7V/AX7EHhbTNc0vUdG1KCe9MtpfWz288Ya7lZco4DDIII46Gu4fwF8SVvLSePxHpn/ABL2wIHkkKX8a/u1EpCDazIXdmAb94UwMJk0rb4Z/Em3WytLrXbXVLW1NqTdDV57G7kEUfzq4SBkYySHDMeqKMKrMSPMlmXPkkcl54csZ897u97NW1SXW+569PKPZ8RT4h9nU5pU/Z8tla1073Tb6W2069DwX/gt38MvEnxO+Dvgu38N+H9a8QXFtrUkk0Wm2Ul08SeQw3MEBIGeMmvcP+CdHhrUvB/7E/w+03V9PvdL1K0090ntLyBoZ4T50hwyMAQcEdR3q6/w2+JTjbP4hsbosLiZJor+e0NpPN5ZX5BG4mjhZZNiMVDLJg4xmn6t8O/iXeW12F8Racz3N59uiWO6mtltfldfs+RGzPEB5bDlDuDZ4OKK+ZKtk1LJnOCjCbnzXd3e+lrefkPC5S6HEFfiBU6jlUgoONlZW5db3/u20vufEf7dH7HXjn9lX9q3Sfiz8F9F1a9t9SvGvJLPSrKS5/s+66yxvHGCfs8yluMYBLrx8tfTn7QHwWX/AIKZ/sZaesunal4L8Thlv7S31izkgk02+jDI8MisoYxMCy7gOQVYA4xXpvjP4d+N9d8UatLY64llY3tjHb2rR6hLE9jLsIeRYvKZCSTkEk/Tin3fgv4iXOhRwr4h0qO+h1SW9NwBJtuIUI8iArgbFfBMmCdvRdwPHXiOJq1elhKkpwVeha1S75rb2krNO23ffu78GF4Pw+HrY6lGnN4bE35qVly817OUHdOLe/bbX3Ul8Efs6fEX9pr/AIJ5+H7rwVN8I9Q8XaBFdPPbeRby3KwM5y/lT2+8FGPzbWXIJPTJFek/8PSPjsT/AMm2eJOv/Ptf/wDyPX0nq3wk+Jd3DezweLoYrm4WWOGAXcyxxBomCnf5ZHyyEHiPccA7xjaesm8C+JbvwjpNsusyadqFvckXskV49yJ7Z2/eAPIm7zNuNjYG09DiuzHcR5Zian1nF4SjOpN+81KpHW27Sf5XODLuE84wdH6pgMdXp0oL3YyjSlpfRJtdF0dtDzr9s79qLx/+z54S8J33gz4cX/jm61xpBf21vDcSHTgsaMMiJGIyWI+bH3a+f/8Ah6N8fv8Ao2/Xv/ALUP8A4zX1b8Rfhj461nXtWvND8TraQXSmK0tHuZYhCv2dUDFgrgHzQzYCbvmB3jBUxz/Cfxte2d8f+Elaxmksora1jj1C4mSKTzGMkpchSSUIAypPHVcZrzMsx2UUMLCGIw1OpLq3Konq9mk+l7adj2M4y7PcTjJzwuLq0odIqFNrRbptX9617Pqz8+/2rfiH+0P/AMFDNF0bwvJ8FNX0Cx0++F6rfYJ4i8uxoxvmnCIiAO3p2yeK6P8Aaq+FfxG/Z+/YW8D/AAK8OeHPEviPUdREmq+KLzRtNuLq1iDTNKtosiKQf3hGfaIHGHr7dPwx+IVvAYv+EigvokZwEe/ntjMC1wUYuqM6BQ8Pybm3eXgvgDMVr8LPiLdrdJeeJLaF7m7hlFzBf3LCOJdpeNYdqgZIbo4ODyea9+HGVKn7ClRp0o0aMudQTlrLVJtu70u3a29t7WXy9TgCtV+s169WtPEYiHs5TahpDRuKStFc1lG99r7Xu/nn9nb/AIIu/Di4+Cfhyfx7Ya1N4uurNbjUxFqMkCQSP83lBBwNgIU+pUnvXPftof8ABHPwb4W/Z+1fWPhhpeuP4q0jbdpaG7kuzfwqcSxIhyS+07lxySmO9fVlp8PPiXHBH53iPT5QLSGylhFzKrSiNkdphMIsrLL+8QkIdiupBZk+ae/+Hfjmd38rVY1tTFtjtP7auFaB8Ph/tHkl32kr8rLhv4j8vzeZT4xziGNWKeNuubm5eZ8u9+W3bp2t12PZq8A5BUy94FZdyvk5efljzrS3NdX16vrfpueM/wDBITx540b4EzeB/HPhrxNod54PdU0y41TTZrZbuyfJVFZ1ALRMCuM/dKelfXNcD8NfBnjTw34lWTXfENvrWmtb3LOuCsiXEk0ZTaNoBjEaNgE5QuyjcMEd9XyXEOLp4vMKmKpqKU3e0b2u990nq9fmfc8K4GrgsrpYKrKUnTXKnJJSaW17NrRab9O4UUUV4p9CFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//Z";
 
 doc.addImage(imgdata3, 14, 10, 65, 35);


var columns = ["Datos del reporte"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+fechav.toUpperCase()+ifech];
var data = [
[fav + '' + iopc],
[nombrev + ''  + inom],
[edadv + ''   + ieda],
[Estado + ''   + iopc2],
[Cp + ''   + icp],
[desv  + '' + "\n" + "\n"   + ides]];




doc.autoTable(columns,data,{
theme:'grid',   
margin:{ top: 57
 
}}
);

const hoy = new Date();
var columns = ["Datos tecnicos","Pruebas realizadas"];
var data = [
[elementonev, ielec],
[elementocav, icable],
["Finalizacion del reporte segun el sistema:",hoy],
[]];




doc.autoTable(columns,data,{
theme:'plain',   
margin:{ top: 40
 
}}
);

//var imgWidth = 100;
//var imgHeight = 100;

var imgWidth = 75;
var imgHeight = 90;

doc.addImage(imgdata, 70, 125, 60, 69, 0, 0, -90);


//ancho,entrado,mediddas




doc.save(inom+ieda+"_"+'1.pdf');
alert("Reporte enviado exitosamente.")

 //doc.setFontSize(18);

 //doc.text(ltitle,60, 10);
 //doc.setFontSize(14);
 
 //doc.text(fechav  + ''  + ifech, 110, 20);
 //doc.text(nombrev+ ''  + inom, 10,30);
 //doc.text(edadv + ''   + ieda, 10, 40);

 //doc.text(desv + ''    + ides, 10, 50);

 //pdf.save('1.pdf');
 

 }
 

