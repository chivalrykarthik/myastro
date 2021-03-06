import React from 'react';
import './description.css';


const Description = (props) => {


    let dayOfWeek = ["Sunday", "Monday", "Tuesay", "Wednesday", "Thursday", "Friday", "Saturday"];
    let curDate = props.dt;
    let currentDay = dayOfWeek[curDate.getDay()];
    return (
        <>
            <div className="flex-container-col">
                <div className="flex-col-item" >
                    <span className="txt-description">சூரிய ஹோரை:</span>
                    <p className="txt-do">அரசு சம்பந்தப்பட்ட காரியங்கள், வழக்கு தொடர்பான விஷயங்கள்,மேலதிகாரிகளை சந்தித்தல், அரசு சார்ந்த முயற்சிகள், சமூகத்தில் மிக உயர்ந்த இடத்தில் இருப்பவர்களை காணுதல் போன்ற செயல்களைச் செய்யலாம், உயில் சாசனம் எழுதலாம்</p>
                    <p className="txt-dont">புதிதாக எந்த அலுவல்களையோ உடன்பாடுகளையோ செய்வது நல்லதல்ல. சுபகாரியங்கள் செய்யயவும் இந்த ஹோரை ஏற்றதல்ல.</p>
                </div>


                <div className="flex-col-item" >
                    <span className="txt-description">சுக்கிர ஹோரை:</span>
                    <p className="txt-do">அனைத்து சுப காரியங்களுக்கும் இந்த ஹோரையை பயன்படுத்தலாம். வீடு, நிலம், வண்டி வாகனம், ஆடை ஆபரணம் வாங்க மிகவும் உகந்தது. குறிப்பாக பெண்கள் தொடர்பான அனைத்து காரியங்களிலும் நன்மை ஏற்படும். விவசாயம், பயணம், பண பரிமாற்றம் போன்றவற்றிக்கும் இது ஏற்றது.</p>
                </div>


                <div className="flex-col-item" >
                    <span className="txt-description">புதன் ஹோரை:</span>
                    <p className="txt-do">கல்வி மற்றும் எழுத்துத் தொடர்பான வேலை தொடங்குவதற்கும் ஆலோசிப்பதற்கும் ஏற்ற நேரம். சுப காரியங்கள் செய்யலாம். நேர்மையான விஷயங்களைப் பற்றிப் பேசவும் முடிவெடுக்கவும் இந்த நேரம் உகந்தது. பயணங்கள் மேற்கொள்ளலாம். புத்திக்கூர்மை வளர்வதற்கு இந்த ஹோரையில் முயற்சி மேற்கொண்டால் சிறப்பு.</p>
                </div>


                <div className="flex-col-item" >
                    <span className="txt-description">சந்திர ஹோரை:</span>
                    <p className="txt-do">வளர்பிறை காலத்தில் சந்திரன் ஹோரையும் நல்ல ஹோரையாகவே கருதப்படுகிறது. இந்த ஹோரைகளில் திருமணம், சீமந்தம், குழந்தைகளுக்கு மொட்டையடித்து காது குத்துதல், பெண் பார்ப்பது, பதவியேற்பது, வேலைக்கு விண்ணப்பிப்பது, வங்கிக் கணக்கு துவங்குதல் ஆகியவற்றைச் செய்யலாம். இந்த ஹோரை காலத்தில் எல்லா சுபகாரியங்களையும் செய்யலாம். குறிப்பாக பெண்கள் தொடர்பு கொண்ட காரியங்கள் ஜெயமாகும். வியாபார விஷயமாகவோ அல்லது புனித யாத்திரையாகவோ பயணம் செய்ய ஏற்றது. பிறரைச் சந்தித்துப் பேசவும் செய்யலாம்.</p>
                </div>



                <div className="flex-col-item" >
                    <span className="txt-description">சனி ஹோரை :</span>
                    <p className="txt-do">கடனை அடைப்பதற்கு ஏற்ற ஹோரை,பழைய பாக்கி/கணக்குகளை தீர்ப்பது, ஊழ்வினை (பூர்வ ஜென்மப் பாவம்) தீர்ப்பது, பாத யாத்திரை, நடைபயணம் துவங்குவது, மரக்கன்று நடுதல், விருட்சங்கள் அமைத்தல், அணைக்கட்டு நிர்மாணிக்கும் பணிகளை துவக்குவது, தொழில் சம்பந்தமான அனைத்து விஷயங்களையும் முயற்சி செய்ய ஏற்ற ஹோரை.</p>
                </div>


                <div className="flex-col-item" >
                    <span className="txt-description">குரு ஹோரை:</span>
                    <p className="txt-do">அனைத்து சுப காரியங்களுக்கு மிகவும் ஏற்ற நேரம். வியாபாரம், விவசாயம் செய்ய நல்லது. ஆடை ஆபரணப் பொருள்கள் வாங்கவும், வீடு மனை வாங்கவோ,விற்கவோ ஏற்றது.</p>
                    <p className="txt-dont">சட்டத்திற்கும் நியாயத்திற்கும் புறம்பான காரியங்களை தவிர்த்தல் நலம்.</p>
                </div>

                <div className="flex-col-item" >
                    <span className="txt-description">செவ்வாய் ஹோரை:</span>
                    <p className="txt-do">செவ்வாய் ஹோரையில் நிலம் வாங்குவது, விற்பது, அக்ரிமென்ட் போடுவது, சகோதர/பங்காளி பிரச்சினைகள், சொத்து பிரித்தல், உயில் எழுதுவது, ரத்த தானம், உறுப்பு தானம், மருத்துவ உதவிகள் செய்வது இவற்றையெல்லாம் மேற்கொள்ளலாம். ஆயுதப் பிரயோகத்தை துவங்கினால் சக்தி வாய்ந்ததாக இருக்கும்.தெய்வீகத் தொடர்பான விஷயங்களையோ, சண்டை சச்சரவுக்கான விஷயங்களையோ பற்றி பேசலாம்.</p>
                    <p className="txt-dont">நல்ல காரியங்களும் செய்ய உகந்த நேரமல்ல.</p>
                </div>

            </div>
        </>
    )
}

export default Description;