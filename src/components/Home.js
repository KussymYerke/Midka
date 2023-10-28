import React, {useState} from 'react';
import Posts from "./Posts";
import './style.css'

const Home = () => {

    let [likes, setLike] = useState(0)

    return (
        <div className={'wrapper'}>
            <div>
                <h2 className={'laet'}>Latest News</h2>
            </div>

            <div className={'nick'}>
                <img width={48} className={'imgh'} src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt=""/>
                <h1>Harold</h1><span>@h_asda</span><span>10m</span>
                <img src="" alt=""/>
            </div>
            <div>
                <img className={'po'} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUEhcUFBUXFxcXFxcXFxgaGhcaFxcXFxcYGBgXFxcbISwkGx0pIBcYJTYlKS4wNDMzGiI5PjkyPSwyMzABCwsLEA4QHRISHjIpIikyMjIyMjI0MjIyMjIyMjQyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAEQQAAICAQMBBgIGCAMIAAcAAAECAxEABBIhMQUTIkFRYQZxFDKBkaHRFSNCUpKxwfAzguEWU2JyorLS8QdzdJOzwvL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAApEQACAgEDBAEDBQEAAAAAAAAAAQIREhMhUQMxQWEUMkJxgZGhsdEi/9oADAMBAAIRAxEAPwDm1jryOJh7HDGiyh4jn3keAFZvY415ayH3yOzNEIbcass2423KQgVyDDLgmMwwAZhkCMIZcrK4BTWKstK423BCkjGrLduLbgFVY1ZaVxtuAV1jVlu3G24KV1irLNuOEwCrbirCVhP7px+5PoB9uAC1jhcK7o+VZakbD+xksoEEHr+GOIvQ4bs9sfufbJYBAmTC4SYccQH0OCgpXIBDh3dV1rF3QxYBFjy9I8IVB51lyVmWwgf6OfTGw/fiyWzVBvdHIPD7ZuNpxlD6fOamacTDOn9srfT5ttDlDw+2bUzDiYbx5URmxLDgskOdVIw0AnIkZeyZArlIUMuQK4QVyBXNEKaxtuXbcW3KCnZ7ZErhOz2H8WQZcgKaxVltY9YBQRirLiuNtwLKgmWIh9/uySrhEaE5llRVs/5vtx005P7J+7NCOEed5asI8hnNyNpAaQD91vvyY03zw5UOJ1rM5FoC7ivLHpR/rhBS/OsrZPllBU2VkE5PbkhlozZVsON3WEriY5SlBiAxKmTJxt+CWPsxY3eYslMWdNvIyxZ/XKycgVPpnLGzpYaGUjKnQHpgwyQfJgXIrlj9sFeEemHE3lTrm4tmGZk2n9MCeOs2Gj+X4f1ymWEH+1/pnVSMNGUVyJXDHir+zlJTOlmCgJku7GWhMlWADFMYpl5GNtwCgR4jH/d5ftxtuADlMbZhO32/DFtwCpEwuFB/YyMaDL1av/eYkaRdGg9MmCPPKRJjb+c54s3kGIQckUHp+OCK5/sY7TZMGMiyRgMCdycd3vGGbUaMuVkRHeTEWMWxt2apksdxlTZMnIVlSFkSMVZLdjE5aJZGsfGrHy0LOwEYxbMHWcZejg+YzyNNHZSQzJkCgy/bkHU4QYOwHrkCv9/2cvEd/wDvH7r3/AZbMgrIcpdThj0OuUOw9c2iMCdLyp4MKYc4i3rnRWc9jPMeLbhzKDlRTNJkBtmLZl+zFsykBymNtwkx43d4APtxBMv7vH2YBSqZcqY+zLFGZZUyvu8i6DL2bKiLyJFbKTjHL+7xxFmtiA1YqwxYcXc5MkWmB7MQjOGd3lqpkciqIEsBOTGj9ThypkifTMOb8G1FeQEaMY40g9MKLZBnrzxcmX/kq+jD0xZLvB/Zx8tSJcS+sll3d4hHltHIgjkYQs/rkBFku6zLSZpNoIUqfPEW+38MG7rFtOYwN5imAPqMFdMK2YxTOi2MN2B93jbcKMeN3easwC7MfbhPd4jFiwClMbZhXdHLEgyOVFSsB2YimaQ0uM+myaiNYMzdmLu8OEIy5YVw+pRFCzOWC8tXTnNDu1xqGYfUbNqCQEdLlTaes0DlbHClINRA+5xwmEHIGM5q+TP4KSuNWWlDjbc0SyFe2MTltZErhIZFRY5Ak5dsxd3mtjNso5yJXCO7xd3gA2zHy/Zj5qwb50YxDR5qisktZ8rWke/RRlLoz5AZI6Rv3Ac2EIyasuNeQ0kYY0h/dIyDaM+mdHvXFuXHyJcB9GJzY0R9MR0R9DnQMF9BlbKPLNLrszoo59tKw8sj9Hb0zeK5Gs0uuzOijEGlb0xHSt6ZtgjEyA+mNdjRRhrAR5ZaqexzTaMZHux741bIunQGNMT0rKJYGHUZphffKpYL88RnvuJQ22MkpjjDTAPXImEeudskcsWCMMjRwnusXdZckSmDUcbZhXdYu6xkhTBdmRKnCzFjd3lyRKYGUxbML7vF3eXMlAmzG7vDO7xu7xmMQTu8bZhnd43d4zGIJsxu7wvZjbMuYxBe7xYTsxYzGJrLNkjNXXOIHbh9Px/0yQ7aP9//AM54dM9uod2ki1Zfn0/s5MzRCv1ljzqrzgx2wfU/39mTHbRyaXsano799ZFdUKHo3tlaaqLeAWu/TgD7TnCntr2/l+eN+mPY/ev54XR9lfV9HoLauI87QKNVY9q6eXOQWSIg21c11HHpWef/AKZHof8Ap/PJL26P3T/0/wDljRfJNRcHdbo6Pia/I8V/r54zqlAiS/In39gPLOH/AE6P3D/0/wDlkh2+v7p/6f8AyxpPkmpE7YomwHvAW54rjK9vhvcvtz1+Wcb/ALQL+6fw/PH/AE+v7p+4H+uXTfI1InXpz5gD1vjLxp1IJMi/ZZH2+mcUfiD/AJvTp/rkP02Pf+E5dN8jUXB266VKvvFr2JxhBD5y8efBziv0zfk38DYv0wPQ/wADfljSlyTOPB3UukgIpH5q7Lce3lgKxpZDMB78tf3ZyQ7YHv8A/bb8sl+nbFWT7bH/ACyrpyXkmcX4Ovm08f7DBh86P3Y7aVB0dSa5HIojy9849O2tvSx/kk/LE3bl9dx/yS/lkwlyMo8HXafTbj5AeZJ8vYeeSm0tHgAi6ux+IvjOR/Tl8c9P3JPyyD/EAUfVc/JJD+FYcZXdlTjwdadGx6AH5MOPaj55WmlZgSBdeVi/uzkP9p1PRJT/AJGH4mssf4nqjslI9eOvSuTx8+mMmvKGEX4Z07QMOqt9xySaR26KT/foc4+T4sfdt7tz6XJHfP8Aw7rHFnK1+JNRYA04piabvTQ9L2oeTXleYl1ku7RpdG+yZ2DRkGiDfpXOMYz6H7s5HUdvateQkVC7JE/FcbSCoo3XP4YLqPiTVIm5pEHIHEM1AnnqX61k+VHkvx3wd2NI+3dtNetZEwmro18s84n+K9QbQava1eUP1Td/tOfldHjKpO29ax8M8hWhuKQr4RVttUqL45FsMz8pDQPS2gYCypA+RysofQ55nHH2m7bBLPTi9x74AH92whIPsvGV6j4Z1rcSy+oAdphfQUN6836e3OPlofHPSZJ0UkFkBHUFgCPmL4xZ5YvwfqDzui59ZI7+3xYsfL9DQNlH9v7+7LA49B9+WCCSvqr9pP55JYJOOI/xzvmjz0QVx7Y6uPb7xl40snrH9xyQ00n78Y/y3mcxTKQ49vwxvDhI0sn+8Uf5B+WT+hP/ALwfwD8sZkpgJC+2MQL6Yf8AQz5yH7EA/pkfow85Wr5DLqCmA0PT8Meh6H+E4YsCHpI59hX9Dli9nee2U/xV/PLqIYsBCex/hxd17H7s2I/h6QixppyPXbJWWp8NTHppJPXxbh/PM6qGEjC7v2xbf74zpV+FJ/LTp9skf422WJ8NTVykC/ORT/2nGqirpyOWoe33jIlPTOp1HY7xqTcBIANKXYmz5fLJw9lqfrSxr8o3P8wMaqNacjlAjf2P9MujDjoa/wAo/LOpHZkIu52PyiHP294Mi2kiHQyt7kKo+6zjVGlI58GT98/wj8skWl83b7l/LOlC6UVccretuP8A9Uyvu4wSwhJXqL7ygB7gj0yPrGtOXJzLwu3Uk/MJ+WDv2cD1H9/ZnTB18W2PrtIG0t0P7JINe/OM+neSqhBrpuFD8OSfmMw+qjS6cuTl17MiAqlr08R/DJJ2XASBsX0HgNC/eqAzqo+ztQeBAg++v+0fzwuLsTUn6wRB7e/FWbyakfRV05cs5rSfDcLgkiJRf7ak3XmFCmx75pxdg6FOZCknskez/qZh/LNyL4Yl82/r/UDDYvhY+bfgov7eTnOU4PwdIwkvJyes7L0b8RxUvBKkltxB4Jr+t5dpYljoRxxiulxqx+/qM7OP4cQdefmThsfZUa8AH+/szm5RfhHRJ8nMaaSQm2iXp9baAePKjzmtC7mqiU/KxQ+fOavcRqboX7izx7ZB9aosKrEj0FA/b0OcqRq2VRwbybBBQgEWaB2huvX9oYJ2nGsabiqsb6G6A4skknCn1LnpVXR4IPnxbGv5ZW93dVfF14rriv8A1542LuZP0WA892nPoqkfYe75xZqKp/fP2ivw8sWNi7HNL2Ho751MnzEYH875yxextEOs+pb5CMD/ALDli9mtXSU/wr/MnJr2S3mrf5nH9BnoyXJww9FY7O0I852r1ZRf3KMuMGhAoROeerPJdedEOK6ZYvYzH9hf4m/plydgsf2VH8f9TmckXTA9miXpAT/zSSn+b9cfvtMK26WPj1tr+d3/ADw5OwG9QPs/1whewfVvwGTNDAyBr4h9XSQA/wDy4/yySdsstVFED6hFH8hmwvYSeZ/p/TLU7Gj9/vOM1wXAxG7en/YofJQB+GUydr6th9d1HsCPxzpU7Hj9B9xv7yctXsyIfsj7smfoYnJPrNWRRlP4D+uDs+pPWQ9P3h/Q53A0UY6KPuGSj0iAEc8+rG/s9PsrGoxgjgk0upbq7D+L+g5y6PsmdjRkevXm/uYjO97pfTr744Vfb8Mmci4o4h+wJT9WRrrqaq/l/S8si+HZatpL+8fcKOdpa+34Yty+2TJlpHLJ8P8AFlhz677+4kfiMui+HFIvcD9lfzvOk3DGDYt8ijGi7AUDkm/QHj76GXp2JGPInNIk+mMQfl88hQROy4lPS/al4+VC/wAcsfSxgWRQHN2QBXqby53o8nyv0488ofUqvVuvQ2a+/pf9L9MAiskO7aCm704voG4HXpRyQnTZvWtp8wLHpfAwf9IR+LZcjCiVS7s7uNxIUHwngkfjmVqdG0sgkLCga2iTwMBRG8qpYODQ4I6+/EstG3LrAi7irkeiRu7fwKC34ZUnaYIva6+zjaw/ynn0+/M/SosbKQw5FABGYhaJP6weLZQ4Jrkfc7vW5kTvZGbYdqgE0DZDSNtIHNkE/wBMWKCV7Xu6XgUOTxZ8jXSuPv8AtyD6pnoBTyf3WUr73zlcOrbctllBY8CLaq8NQZiCDZ6Mpo+93iIk78/rD4gvApeQpYKHYENdgeVcnm8llopeV2egi+HnxE7iKu/EBzZ6eXNG+MuXTSMotj16FbBA/wCU2L/0yxLK7mQozfWFl1JWwKbbz8wB9vBynUa6NhJGCzugG5F3C/MjkgHofPJe5RafTOOC0aELSqpYmvVo/DfT+eMkbK53SKT4QqjYhJ6+E2eOOmBwySyAPHpBGSeJJnjHhFVyhYt0HIPNX6ZGBzLIe7fd3cm1/CdiOBe0K5DcKw8SgXu9OMtkoP2OOO8bj0C/kf79OmLMnXITI1Lqzz+xPCqf5VZ7A+eLGxaOsOlQkMUUkdCQCR8j1GXBBkO8GVy6pUUsxCqOSzEKoHqSeBmzBf0xF8ETViRbj8XNfjXQ1lGnhnLbpJEI5HdqvhAs7SG4bdVXfHXjJYoOMgHnkfpC+t5H6OCeb+wkD8DkzAPQf6+uAQfWKosmh6ngc8Dk451Qq6/LMztjTashfohgJ3eMz7yAK6KIwObPX29+A+zYtekgGqn0hXk7EilLFfUMWAUD1IPTIU3/AKX7Y3fOeg/nkmBq02sePMAV8xflmf2hEZVIGokhVTTGMLvO3k+J1ah8h9vOCB+58dVJ6nMXsfsyKNw8cupfddGXUysjMR/u2anNexqs15NZGH7tzyaoGjuu+g6+R6+mCl4TISuiC3ZVs0NxC2fQX55gHTrG0rxLJK5beVeRqCniliBAVODQ29RfOA6eF3uRtKKX/CTvDv3ByAJC7bK6ngt+FYsHWmaMCyy/xD88imqQj9WQ9GjtINEGiCeg6HrmJqyrbYZHRJHFFrjIQV9UB1IeyOLWvlXJMMYVQoIFDaH3qpsCvqxhQePKvuyXuKL37Se4x3dNJuIVmoBALLM4UheL4+XrxL6YwYF7UEkUWUranaNm1AzA9fF78dMF0S7YA77ZJa4MihWZmJotuAYL04oZVqw0Ue0Txo8o4VQveSMRZMZY8tXNmwOPIZctrFbhOsJlUxyHuztYgJIyyEgcFSGUqOCefTAtEI4h3YbuwxKxku6d4eWdgz2KJrxLRJvy62LoI45Dcg74sshchNxA8NEncSaLCxXWhWDokk4bv0iWENsUl5UUp0BkUhN7MdvgG1RfUnjJuC7tiWIuFPdPKpWt6DdGCwpg56CwPPnbloEhd0tQKDB0cndtUWZWCBYyePCLHnfQZkfD/Z3dF1gklm8bW++Mxh1Xhm8JAJBVR9YmjdFSQZptRGH7tT9K3NUjMYTGrCy4Y/WJUhvDzRby65HuVbBMkjGMszsQAARGryBV30QDGo3HryfSz0yubtGJAWkZolFBn2xqnViCsoBFiuRu42jpfMdXA0yfqzKVI+rHsSPbuXxF2B3ABWG2M87jdWCLdMhmRHg5ibxs77tpYcrURqwDfAIoqOeuKoWT02rt7XbsdVkjcvvZr6KEChVXbVeLz9bJj3zl7URCORh3nKiQWT4qG4dT09STfPMn1PjapF2J9c2pujRD7eVoivPzusjp5gjrHJJGGk5j3BVEjG2pF3WaHPAFXfW8N+AlRKXs5FUqsskakHkFS7PfLFpEavLn18srnmDqEjeI7ZI1YGpkomqYCRSrfMGrHB8qoT373IqDYx7qxKzgBtjMFdQQp20GAo0efW+fQxtG8e0JuDJ+wpCbiVPkQQRxV9emKFjRTqTskdAwYbV2GNixJagVPiUAdNvPBPXJa/VEJuJEZDWWuJeEP7atuBBoUeosHjAtWY4hvaaRGCso2zMFY1yNrfqwfDd9ePnbmFxNHLTd2Iz3k0jgyQgrZGyitkqg3C6pvXnKf7laH1+oLp3kay0G8SxtQbaCLLDll4AJHoBYF5PSTLMtgKJIyqMliQgsp2q2+ghO4EBhzfnxgPbvaMazwtHqzGJL3xmIujoil22iw6sQtWL63WVdvdvRxQsyB3JagtmHeSRSqXALGuQy8muDi90y0bG6RfDtuunjQUPIUqAChQ49MfOeiadVAOi1MvF94k6FWvngswJAuunlwSOSslS5/kZLg67U63bIiLG7bidzKpKoAL8R62egq/esN3hRZND3/u85vtj4l0umZPpI2SOCAfDuAFE+MH8OMGi+IdPIoXTMXQk8sskhZuSVAIJe/MA8V5DO170c6dWdV9KTcFFEnngr/UjLEnViVXkjg15fM9L9s4fWdtPpN4h0k0rsFJYJHHGOeiohDcXzd9Pbgvs7tiNkM8haKRkO4X4lSurX0+0+/F49Cjp+0oy0dd40IBUmRSgNA2VBYGr6X154yGhQhBskkkB5Bch/Pya1J+285zXal9TGkcDROiHm2Zltf2WPj3cEWN14Jou1Tp5pUYF2pVQI7Msjclt6bQsZHHmTTe+MkWjpdfrxuZKcuqg7VLKDZ58SkA9PMivvwGBJdoqIWWoqqRpSclizSck8gii3Sj5nKv8AaJuSImJKblchwiij4QUQlzwfL780O91JKju127UN94yMzcbrWvCo5NHrYFDnJYqieggaEFmfYrMSwZgwAPvtUA9OaPphuonXgmQIOi+IUSf+Ejnrmc7NG5BeQlzUaDpuseLedxQWwBJodKHrL6LuAEwLNxYG9lv2kpS3NcdOnGAQh0+zvHjYNd7y6OhJXoA7MLHvyOmVw9nSM+6YRPGLURIrnksSru7Gidp6EeY5Pnz/AMT/ABQnZ/gpp5mUMyhljWCMA7QSAx3Hca3Frs8ji9GP4m2JA7yJeocCMk7URWW13lTweQL56/PMuVNIqjatB02kXe5YKbIESKu0KqcDxJRPN3ZAwftDVDTK87uY3pECJTtsVQ58BBIosRQ8ufPCH1UzRRusUzy76NFYgy7d25jIQVQ9BdN7DmqU0jopkMTCSQXI4mMndM1ArEZGtgASTW0eE9eBhrgJ8mh2PNHqI0ljktSFZq4a3UNsYnxCtwsceWXaiK/FEgLhjV0Be1rPI8wxF9eevXMQMwfu0ieWVYhIzsQkcg5AA5JJJU0Kb3J648WvIG6SOSNnjtFIYFXLbCkqoCq3dg7qIBJrJGWStiSp0jVl1S7ASrimpd2wOzH9wXx1o9PP54+kQlW3f4lHwAyKyj9ndbGr58QNHisxtXoiv69NNIZWJVVErxRohG1pVCHarkKOiljQ9cvh1WoiRv1aoCGO+UlNqRgKqnbYAHFeI3uZiV5ApQTXdkyu6JFLJEiksxWTUowNbCNjb42Fj6vAvnm+dbd3ajgNTEDeVICiwFBA8KqQLJX7zRIfZcMkMbB5e+nctIxUsCN7E7UjckBFuhxzmYO1+0RI7LoXkjDKIwWQE/WMjks1KfCKFdRV+LMZK8RjtZu6WTUIkjuEC0CqJalePEtuVDEm+aH44LoZ9w7pEZSQWfexKBDQbvFLVvG9eObr54SulM3j1cUQo0kZqQE+EhnA8NggV9Yjyq+Ypro4owZJIoIxdgrtLN1Fq+0qfVa8+KzVO0TwAxzSQwt3UZdUOyIQrVRg7PAXdwwB3EhTwOK8sv1PZQkR0MkrBybCSsrkkWI228HzPUdeeOmd2rCxIGsbUMO7LqI0aKI7SNynunZ93KlV3A9eTyM3OyEkSnldQWBYLchIsggMztyQDyABz04zH3Vua8Gb+gIkkExWSKdkIkIZdqIa2xIqkqFUotbaP/F5YJLrQjEQ967S8PK+2WJEvuz3nevuWO2sqOSAxAoHNv4gkRtse7Y8quitvK7AFLGTg+KgDx0JIzJ+H+0dNG8iwzRurELsElszJYeQ7hfJ4+swAQEVzeneXoiqvY3a2uQI7RyvqWQLJJHp/A7lSLqRGtVCk+DzHAORklkL8h9iFStLN3inndHIdjhlKjbd31YeWb+n7P3pvkVd4ZmKoCoJ8gWNkmgBusXXQDjMdu3I5SyyxhV+r4WLOWDkKo2ng+FjYPvkb23Kq8Aw1MEbTdoLNJPFIjbEMbmOLu0p1DMCVLbaANfW87x+1EGv0NzPSvUkaIzIZK8aL4/DbAdDY5vjrmxoezhGD3ZZlI+q7WoHNAccDn5+t1lX6Ni74yLwxUKiq9IrAsxdFA8LGxdGiByMqkhiDaPsvUBQX7pC4LFGdnKmqpXApeAPqcA8+55qHVdpxaxz3LauN6jdVkVot4Fkx7gO7UAFfEKJ6kEgZvdpfCaahbd5EFMKSVyoLftovAU9eKK8kV55Z2f8NmGFI1c+BiVpu7A5JB201nnqb5s8ZmKjHZJlbb7nSQ6Z2UEBksfVIj8J8x4Wrr6Yszfok37LOR0H66QdOOgGLOmS4Znfkwn0kCSHU6mNbACiSY72F8BYonZgHN9ABjat4ZIN8TSx2oY9zE0kyj9hZAgJjXzKcHmrFHJDUMI+7Qd5IzMI2dSUjS9u5Y4wd1A9WPiIPiGEImp02n7vSQBiRu3yOoZm4tmiUcEnkAUOTdedytWSqMPQ9nfSlE5lm7hNwMUcZWSWTcVdGZui2AKr7Rmjr4dJGirJp/CAp7pujMare8lbhfTedvHTLOxl1qizJEXkfe8YgKkmwjMHeRWYDjxbKpT7HNTR9lKJu+n1MkpcFUhDfqjfJJRQN/ToeBR64b2FbnK6z4s1O5mg0bfRxalqSpJAdrCKRG2s18DbZJUjqDhnw725LqSNONK8JjjA3yPuYMu29ynbusnqaNijzm/2nBBuWSaOJEi6F7VIrNggWFUkirA9b4wfTfE+kfUR6WKbvZJG42eKMFFLVY4BpSOuRNyW3YdnuE6FpVmMbQSLHW9pXMZUupG1Qqn0s8L5fdmS/EOpklkj7PihcRsO/t9rgsTYSNyAp4Js8E+fXNb4gi17qF0Z0yki3MrtvX2CopH23gHaTSJSIjzuOXELLHt6/WkdlFcbT50fLJljSW/sbPfsGyaowuo7uWaaVSvhZXalO6mBKpGOfrAAcCz0w7Xaz6PA8mokQVyABwBX1L4LEm+a8xx6ifD0MbVqus7ptcLJvSPkXEm07aBQc+ZB565H4w7LOs0nc94kas6l5HCnhTZVSfqsSK3eWbXsj9A/w6dHOZJ4I4/1oUuSjGQ8BSju3QApWwGuDg3aXwXE7CSV3O6RvqqqqsZU7Y7jRTtUKAC5IHI86Ohp9HJEkUYbc4i2vKzbVO1ls90hA3GzRvzPW8hrNdDJHTytwVjcI4J3OQgjcNuFsTVEXznPwa82gnQQfqI0jneaMFlDv3bk7WIouw5C0RfJ4HU3kZopI0jURxKtkM3eAIim6ZF2+N+ASSPM5n9tdqmDTqkcc7SMLXdGI09W7xwqLGD0s0R1onNLVdrxfRmmkZIWW/8AG8QRgSATsPis9KPIN+eb77Gd+4Xp9AEXYiqykl3JJYsx5rcxJHNV6AADMnt34o+iKu6NpWJC7ISHdSeAKIUuLocevTMTT9t6hp3ErMsTBfo9I0ccgZbMpkemJtWG0DzB5HOU9i9ng6gS6hdQ8glKwGAb4SE+szyrx1ZlIO2tp+eE12FeTQ7S7Y1Oqmg0kUc+mElSPM8ZUoq+KlDCi1gD7enXNpdCqPvm1EkhbaiKTYUgg8KvDOWXrz7Vzbp2bIxEmoNd1Izo28AFeaEijiqIsWeR1I4zQhlMq70KVXhbz2kcFePqng8ZHuVAT9luO87vaveeJpStua4ClWYURx7EX088zt1xFGO81ep06gUJwsPdyMSR4l2HZ0FE7fKiec6YJG3g3ktVkg8r5Dj8/fMqPspyQskxZ1ct4bVdneWoC+fA5uzY4IrFYrsO77mJqNdqZjHJp1jSCPcUZ5irThRstQis21STusCyR5c5m6uGSSgI9LLKrxysFDSs8feeIFjCSrEhhfFdb8s72bTIrd4N26toO5yAb67AwUmwOvoMwe3O300xiaV5BHIx8YritvhWhwLb1vyGYaTlbNJ7UhtbNK6kSP8AR5Cy7TG+6TxHabZ49sYAYW3iHWsF7Z+FYWCPqXlmZSqbwQoVCQpZ6ADjkk2KILcDG7UjHaaxSaOUeFi5DMVYFSNp7phx8yB7dc0+yNBqU08kEjJIxsCUljat1v8Aa3Cz7dM15ogB2toIeJn2aholZY45dhQEg7vDW1mNdSOPKucv7J7QRljEmllgYnwoICF3BSdysgIAAHBO3ofXJ6X4S7ueOVZmOwN4WQGMEgDeBuBD8cHmvFwLzoJ9OWoEk88m6K+4Fc+n25iMZPdmm4+DlZotM29pNRM8TyEsjO6xbkAUqSBe0VyLroDxxlWh7I00U5Czd2T9WOmajxtBsnZQ+V2c3u1H0saqmpkRt36tRJRZmIJ4CiyevTG0fZeiIBSGI+dsm5vY29nI4O9yWYnbWq16II9NGsjlwVe4wDGAQbVyLN82PxGD9k9ha6VhJq5NrRyBu7RY9rstHkk+IX6UPmM7XvEZbQhwLraQeRY4PS/LGjdaPBW7sGgfuBzeCvcmTAFkkYPvTu1UEglgGJsg0lEV0N3zeBrq55A8MEe0ogJaYvtbcOFDJfJ+Yr0y3snsZFmknEskjO8nDSBkUM17UWuAK49vPMzt/WF5EjjaSKUll3o6qopTxIjKQ4sr0o+VjNNvuAxNTrQAO7iWuKD2BXHG4A/fizjR2ereJu1SWJJOyVtlk34enGLM2/YOnhcpo4dpK3HuNcWxW7NefvmjoZWaOPcxN3dkm/GeuLFl6n0lgAp/jfJKHsNzcZ1GmUBOBXA/nixZOl2MzBIOWmvn9WnXn97Od7P0MSxzSrFGJEZwkgVQ6DYwpXAtfsx8WOr9cf1LD6X+hrxf4anzIWz68DrnN9tyEA0SK6UarhsWLPF1u8T09PyZf/ww/wASb/6WJv8AMzNub5nzPnm3NwkqDhQykL+yCTGbrp5n78WLPeeTwZ/Zc7fS5BuahHBQs0L77oPLoPuzvZYFbUKzKpKF9hIBKcD6pPT7MfFiX+BGJ8Suf1nJ+o/8jgHw/CrxRh1VxY4YAjhR5HFiyTNx7Br6ZDrHtFO3SNt8I4/WeXphmkjCaN9oC08tUKq5GPFYsWc33/f+hE8/+KtVIdOAXcgstgsSD9mdpP4NI4XwgBAAOABtXgAYsWbj4/An3MD4e1D9xKdzX3rc2b/w4/PDvhJy30xmJLXt3Hk7VW1Wz5Dc1Dys+uLFln9JF3Nbs6Qtpm3EnwP1JPr65mfC8KvBIGVWG9xRAIohbFHFizhLudPB1Gk0caRpsjRPBXhVRxaccDC4ehxYs9EeyOJN+n2ZBDw3z/8AHFizQANbpI2fe0aFlVtrFVLLx+ySLH2ZKPmIg8iqo88WOMfFnD73+Df2k4NOiJsVFVQRSgAKPH5AcZjdtdD/AMj/AP43xYs6LsRGX8CufoEHJ+tX2d1dZ5n8TzMe02tif1sfmf8AdxY+LK+xnwc1CbFnkkmyeT1Pnj4sWGYP/9k=" alt=""/>

            </div>
            <span> {likes} likes </span>
            <span> 7 reposts </span>
            <span> 10 comments </span>
            <div>
                <button className={'btn'}  onClick={ () => setLike(likes + 1)}>ADD LIKE</button>
                <button className={'btn'} onClick={ () => setLike(likes - 1)}>DISLIKE</button>
            </div>
        </div>
    );
};

export default Home;