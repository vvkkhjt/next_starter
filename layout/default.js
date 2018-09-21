import React from 'react'
import Link from 'next/link'
import { Layout, Menu ,LocaleProvider } from 'antd';
const { Header, Content, Footer } = Layout;

export default class extends React.Component {
    componentDidMount(){
        let url = location.pathname.split('/')[1]
        this.setState({
            currentUrl: url
        })
    }

    state = {
        currentUrl: ''
    }

    handleSelectKey = (item,key,selectedKeys) => {
        this.setState({
            currentUrl: item.key
        })
    }

    render(){
        const { children } = this.props
        const { currentUrl } = this.state
        return(
            <Layout className="layout">
                <Header style={{ marginBottom: '40px' }}>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[currentUrl]}
                        onSelect={this.handleSelectKey}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home">
                            <Link href="/home"><a>Home</a></Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link href="/about"><a>About</a></Link>
                        </Menu.Item>
                        <Menu.Item key="contact">
                            <Link href="/contact"><a>Contact</a></Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}

// export default ({ children, title = 'This is the default title', url = 'home' }) => {

//     function handleSelectKey(item,key,selectedKeys){
//         url = item.key
//     }

//     return(
//         <Layout className="layout">
//             <Head>
//                 <title>{ title }</title>
//                 <meta charSet='utf-8' />
//                 <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//                 <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/3.9.2/antd.min.css' />
//             </Head>
//             <Header style={{ marginBottom: '40px' }}>
//                 <div className="logo"/>
//                 <Menu
//                     theme="dark"
//                     mode="horizontal"
//                     defaultSelectedKeys={['home']}
//                     selectedKeys={[url]}
//                     onSelect={handleSelectKey}
//                     style={{ lineHeight: '64px' }}
//                 >
//                     <Menu.Item key="home">
//                         <Link href="/home"><a>Home</a></Link>
//                     </Menu.Item>
//                     <Menu.Item key="about">
//                         <Link href="/about"><a>About</a></Link>
//                     </Menu.Item>
//                     <Menu.Item key="contact">
//                         <Link href="/contact"><a>Contact</a></Link>
//                     </Menu.Item>
//                 </Menu>
//             </Header>
//             <Content style={{ padding: '0 50px' }}>
//                 <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
//                     {children}
//                 </div>
//             </Content>
//             <Footer style={{ textAlign: 'center' }}>
//                 Ant Design ©2018 Created by Ant UED
//             </Footer>
//         </Layout>
//     )
// }
