export default ({ label, type = 'text' }) => (
    <div className="flex flex-col">
        <label className="text-gray-bold text-lg">{label}</label>
        <input type={type} />
        <div className="line"></div>
    </div>
)
