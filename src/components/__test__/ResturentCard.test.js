import { render, screen } from "@testing-library/react"
import ResturentCard from '../../components/RestaurnentCard'
import MOCK_DATA from '../Mocks/ResCardMock.json'
import PROMOTED_MOCK_DATA from "../Mocks/PromotedData.json"
import "@testing-library/jest-dom";
import { withResturentCardLabel } from '../../components/RestaurnentCard'


it('should load the ResturentCard  with props data', () => {
    render(
        <ResturentCard resData={MOCK_DATA} />
    )

    const nameOfTheResturent = screen.getByText("Arambam - Flavours of South")

    expect(nameOfTheResturent).toBeInTheDocument()
})

it('should load the withResturentCardLabel  with   ResturentCard  data', () => {

    const PromotedResCard = withResturentCardLabel(ResturentCard)
    render(
        <PromotedResCard {...PROMOTED_MOCK_DATA} />
    )

    const nameOfTheResturent = screen.getByText("Biryon")

    expect(nameOfTheResturent).toBeInTheDocument()
})


