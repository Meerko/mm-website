import useTranslation from 'next-translate/useTranslation';

const about = () => {
    let { t } = useTranslation ();
    return (
        <div>
            <h1>{t("about:title")}</h1>
        </div>
    )
}

export default about
