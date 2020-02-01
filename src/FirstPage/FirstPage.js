import React, { Component } from 'react';
import Uslugi from './Uslugi/Uslugi';
import OurPartner from './OurPartner/OurPartner';
import PopulyarUslugi from './PopulyarUslugi/PopulyarUslugi';
class FirsPage extends Component {
    render() {
        return (
            <div>
                <Uslugi />
                <PopulyarUslugi />
                <OurPartner />
            </div>
        )
    }
}
export default FirsPage;
