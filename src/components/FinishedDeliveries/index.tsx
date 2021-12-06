import { DeliveriesCard } from "../DeliveriesCard";
import { HistoryCard } from "../HistoryCard";

import { MdEvent } from 'react-icons/md'
import { 
    Button,
    CalendarButton,
    Container, 
    Filter, 
    Summary, 
    SummaryItem 
} from "../FinishedDeliveries/styles";
import { useState } from "react";

export function FinishedDeliveries(){
    const [isFilterActive, setIsFilterActive] = useState('all')
    return(
        <Container>
            <div>
                <Filter>
                    <div>
                        <Button
                            onClick={() => setIsFilterActive('all')}
                            isActive={isFilterActive === 'all'}
                        >
                            Todas
                        </Button>
                        <Button
                            onClick={() => setIsFilterActive('thisWeek')}
                            isActive={isFilterActive === 'thisWeek'}
                        >
                            Esta semana
                        </Button>
                        <Button
                            onClick={() => setIsFilterActive('thisMonth')}
                            isActive={isFilterActive === 'thisMonth'}
                        >
                            Este mês
                        </Button>
                    </div>

                    <CalendarButton>
                        <MdEvent />
                    </CalendarButton>
                </Filter>


                <Summary>
                    <div>
                        <SummaryItem>
                            <h2>76</h2>
                            <p>entregas</p>
                        </SummaryItem>
                        <SummaryItem>
                            <h2>2</h2>
                            <p>canceladas</p>
                        </SummaryItem>
                        <SummaryItem>
                            <h2>34 min</h2>
                            <p>por entrega</p>
                        </SummaryItem>
                    </div>
                    
                    <p>
                        Resultados de <strong>01/06</strong> até <strong>08/06</strong> 
                    </p>
                </Summary>
            </div>

            <hr />

            <h3>Hoje</h3>

            <DeliveriesCard />
            <DeliveriesCard />
            <DeliveriesCard />

            <hr />

            <HistoryCard />
        </Container>
    )
}