const { default: axios } = require("axios");
const express = require("express");
const app = express()



app.get("/",(req,res)=>{
    axios.get('https://m.dana.id/wallet/api/alipayplus.mobilewallet.user.information.more.json',{headers: {
        cookie : "JSESSIONID=GZ00B8D33804F84E450EBA87A873B24D2932aphomeGZ00; oneDayId=3991623577; alipay_apdid_token=i4EvRnGWQMl4ffyMpq%2BSbysgrT5To5eAofPdea85QZAhxP%2BF2qZcnO6z8CVQoux1; QuickUserData=; _gid=GA1.2.464403253.1676295150; _gac_UA-116196649-1=1.1676295181.CjwKCAiA3KefBhByEiwAi2LDHEpNzY9nicThD5UZiqZ_1ZWGYwPmhQuHUu0bpdydOslomJFZB1epfRoCqrwQAvD_BwE; utmAttribute=; _ga_LR31Y7P14Z=GS1.1.1676295149.1.1.1676295193.0.0.0; _ga=GA1.1.1848673203.1676294592; access_token_app=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzeWFtcmlkaG81OEBnbWFpbC5jb20iLCJhdXRoIjoiIiwiQURNSU4iOmZhbHNlLCJ1c2VyX2lkIjoiVVNFUjAwMDAwMDAwMDAwMDAwMDcwMTU2Iiwic2Vzc2lvbl9pZCI6Im1Eb3ZtcCIsInVzZXJfdGFibGVfaWQiOjcwMTU2LCJleHAiOjE2NzYzODE5MTJ9.LQTSeAGC4tfVwg5noaaM0upYhduZhcSKivEEWRMqVhSW0a7MT59gRE29JsIY4AxGORYsQevsAjMzCAysVYH9Og; mp_f5702edb686b251bbce5949417cc8605_mixpanel=%7B%22distinct_id%22%3A%20%221864afac4e681d-06880133a45b41-504a4768-1fa400-1864afac4e7496%22%2C%22%24device_id%22%3A%20%221864afac4e681d-06880133a45b41-504a4768-1fa400-1864afac4e7496%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.dana.id%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.dana.id%22%2C%22Package%20Version%22%3A%20%22unknown%22%2C%22Package%20Module%22%3A%20%22merchant-portal-frontend%22%2C%22Package%20Source%22%3A%20%22Online%22%2C%22Merchant%20Id%22%3A%20%22null%22%2C%22Merchant%20Name%22%3A%20%22null%22%2C%22Package%20Sub%20Module%22%3A%20%22merchant-portal-app%22%7D; _ga_GGRTZRM7HT=GS1.1.1676295193.1.1.1676295931.0.0.0; bm_sz=3BFA9B7BA9A07E977515A143B15A8326~YAAQLqIAF6bPxDqGAQAAjkkfThKP/ohwvZ2ImsDdB18IlJoUMDwrua3MP8qnLQzrXHrQs6ZNFb5Dpqh3BXWMFrj3iKuu2MJjcROWW24Dr1DNfS5dG3ed5KDiMvTHQbxCMjqfNI+4wnsfHE0Ym5TdKi4CR5sOvXzK2jVP1nYoplMKmgT7uwvur0evx9oeF48KXjtFS1/SC+ce4CDDdvbug9vVkQgrMzKFOZGyfyG0Q+5ddIk5azXx/+wHPb0zui/qLCFWmn7Q4/BaX7aFjUwoBVgCbDhbadlT15QZeoqyQ34=~4272181~4604981; AKA_A2=A; ALIPAYJSESSIONID=GZ00B8D33804F84E450EBA87A873B24D2932aphomeGZ00; ctoken=heoncxyOYsJdrtG6; _abck=E8298ECC71FDD3D1C45F01BA126C8B3F~0~YAAQGKIAFxSTUDSGAQAAgVqOTgnxd7FHdIsg2dpwA34t5XOerTV+xSLw5Fi0RtxteJcE+1TuwEMDpcQVzJ4UH/WfoLOksFvOvMlSHfuXueJEGBWvFCANZ7ge31vMRPdHYahj+Iw592y8lpknw+8JTwoy0MB0yaGCKfHedHPg4xr2tkNtkL19R8lEFrqdGXN+OUvOU1KadPNshLbyNNW/e5Cx5aCQ9n+fOsmyzZUIZEDgfWw2efOYD0jQ1iNbmEv3JO9eBCE/HLpzwFv0cVzR0ABKwzLq6lfF22RES8g2mMVL3SnkFqXbrxyhYH7rby33XfwNUjkRq8gRTr9oZzFRV1u1mS53aGFgRbrZew5BGk/ZDcTrQ4zEyLbAJz5dJcOuCItiewqaQzU3N4Go66NUQAdg~-1~-1~-1; userId=216610000553927650358; bm_mi=53F0AFE5C41EE904995EB61CBC852AE6~YAAQGKIAF2uVUDSGAQAAbdGOThL2zQ34IyfUpRl9uwa2+uH/Ea64cCRlvBa4eNQAMotvA2IDMjmJiNMPJt5WFOo8NgsWVGVSFqy/d0QsXrWOUjiXFWYbrZyOFZrxSGTJZ7bDmh6RZuD32HxJczCHwUSljdfsLgDh2pqnzUMP9+s9YlkuhbQklUPu8n4UJ1zg6azj8HRU50PuYT4tePpJHeULVcbJ9yl2eDmYM/2Q3vvKX9ftAebbVEFFfmync07WL6fjS16FUFWLbPCB3aPY7kepsNYmPO90tBGi9tClfgcrcz/Goi7Le2mQP23lmbLiSw3pwfpmD7ifAqrlJ8Mji4I=~1; ak_bmsc=DF5EA195755C40264407A3C364777D68~000000000000000000000000000000~YAAQGKIAF5CVUDSGAQAARdqOThJs4BiiKveVBtNxCR89TASAqTcsCkDrFaWwKnElQKWK32sGu4x88XkPtHiexoEkqjVYH200Zo5Rmyvtkj3k+7o/WZcOrBv58ArZJzRPi0ToAp8WJm5b/vIOEE+rLegzB+n1FudzRklSajHU8lC+Sjkcghswrnzqy/sFXrT7FNRR9UGiYMtlD8PO0aY2FlDfUClSLyjuzN65fe4b0IKvdJXJ2xmfgNxI0wWAe0/LnWT+TiXJLlKFHegPlAkx+/iAUBR0tkmvvKQeGqeQy1S4/avK4Ef+W3o2QIGupHTkjVFqiSwg/hS9ZCMGLhnFwme0W8jFA48DbqVTWAzffFLEoietd3Uf8v3WJsUD03V2R249JXIuXshGcjxr9tEe7XclKARcKC7oevdbcq7x8tFDqNfIy7+keh3t+3FEJw==; _ga_MZF1LLYY0F=GS1.1.1676355113.3.1.1676355233.0.0.0; mp_ded2d68965bbd813d33d686ee165bae7_mixpanel=%7B%22distinct_id%22%3A%20%22216610000553927650358%22%2C%22%24device_id%22%3A%20%221864af195d11607-0ebb3d4f1fe2a5-504a4768-1fa400-1864af195d21bd6%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22Package%20Version%22%3A%20%221.84.0%22%2C%22Package%20Source%22%3A%20%22Online%22%2C%22Package%20Module%22%3A%20%22dana-desktop%22%2C%22App%20Name%22%3A%20%22IPG%22%2C%22__timers%22%3A%20%7B%22OTP%20Input%22%3A%201676355200582%7D%2C%22%24user_id%22%3A%20%22216610000553927650358%22%7D; _ga_2T78CCLE6K=GS1.1.1676355115.3.1.1676355243.0.0.0; bm_sv=F809274CC8C36C708672211C4F2AD6F5~YAAQGKIAF0mWUDSGAQAAeRKPThIT5/D5CEFdg7Kf9ykUoZckWtV2kGjgoKAVfdlXJsqoHOjDvJqo4ym9WadK1WhHq1v87FkHwjANzvsnmMTc9uXhyIUr/UjhOQFlkA2G2mtm7WXm/+ZDy17b8woRpDQUPM94RfRYd/CyBs0zCecbzsZfhNUmSdv2chgKBi+TwOXONvTiKN7yGcCGF+nFXn+gkYKhnS+CF/Ds1LWcHoYeu3lo+/EMX8DWLoE56g==~1" 
    }})
    .then(response=> res.json(response.data))

})


app.listen(3000,()=>{
    console.log('server running')
})