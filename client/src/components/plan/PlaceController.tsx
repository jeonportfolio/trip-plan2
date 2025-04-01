import PlaceContainer from "./PlaceContainer";

export default function PlaceController() {
    return (
        <div className="h-full">
            <div className="flex flex-col gap-y-18">
                <div className="p-14 border-b-3 border-b-main mb-18">
                    <h4 className="text-18 font-semibold text-main">장소 선택</h4>
                </div>
            <PlaceContainer/>
            </div>
        </div>
        
    )
}