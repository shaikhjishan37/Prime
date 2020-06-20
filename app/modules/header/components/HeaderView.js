import React from 'react';
import { AppHeader, HeaderTitle, IconContainer } from './../styles/HeaderStyledComps';
import Icomoon from './../../../icomoon/Icomoon';

class AppHeaderView extends React.Component {
    constructor(props) {
		super(props);

        this.state = {};
	};

	render() {
        return (
            <AppHeader>
                <HeaderTitle>Digite</HeaderTitle>
                <IconContainer>
                    <Icomoon name='share' size={ 18 } color='#ffffff' onPress={ this.shareData }/>
                </IconContainer>
            </AppHeader>
        );
    };

    shareData() {
        window.alert('Share application');
    };
}

export default AppHeaderView;