import {
    Container,
    Content,
    Date,
    Summary
} from './styles'

import {
    MdChevronRight
} from 'react-icons/md'


export function HistoryCard() {
    return(
        <>
            <Container>
                <Content>
                    <Date>
                        <h1>06</h1>
                        <strong>seg</strong>
                    </Date>
                    <Summary>
                        <p><strong>10</strong> finalizadas</p>
                        <p><strong>3</strong> canceladas</p>
                        <p><strong>25</strong> min por entrega</p>
                    </Summary>
                </Content>

                <MdChevronRight className="chevronRight" />
            </Container>
        </>
    )
}