import React, { useState, useEffect } from "react";
import { Trash2, Edit } from "lucide-react";

const getInitialData = () => {
  const savedIpos = localStorage.getItem("ipos");
  return savedIpos ? JSON.parse(savedIpos) : sampleIpos;
};

const sampleIpos = [
  { id: 1, company: "Adani Power", price: "₹129 - 136", open: "2024-06-03", close: "2024-06-05", size: "130.15 Cr.", type: "Book Built", listing: "2024-06-10", status: "Ongoing", logo: "" },
  { id: 2, company: "VBL LTD", price: "₹129 - 136", open: "2024-06-03", close: "2024-06-05", size: "130.15 Cr.", type: "Book Built", listing: "2024-06-10", status: "Coming", logo: "" },
  { id: 3, company: "Tata Motor", price: "₹129 - 136", open: "2024-06-03", close: "2024-06-05", size: "130.15 Cr.", type: "Book Built", listing: "2024-06-10", status: "New Listed", logo: "" },
];

export default function IpoTable() {
    const [ipos, setIpos] = useState(getInitialData);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [newIpo, setNewIpo] = useState({ 
        company: "", 
        price: "", 
        open: "", 
        close: "", 
        size: "", 
        type: "", 
        listing: "", 
        status: "Ongoing", 
        logo: "" 
    });

    useEffect(() => {
        localStorage.setItem("ipos", JSON.stringify(ipos));
    }, [ipos]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewIpo({ ...newIpo, [name]: value });
    };

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const logoUrl = URL.createObjectURL(file);
            setNewIpo({ ...newIpo, logo: logoUrl });
        }
    };

    const handleAddOrUpdateIpo = () => {
        if (!newIpo.company || !newIpo.price) return;

        if (editingId) {
            setIpos(ipos.map(ipo => 
                ipo.id === editingId ? { ...newIpo, id: editingId } : ipo
            ));
        } else {
            const newId = ipos.length > 0 ? Math.max(...ipos.map(ipo => ipo.id)) + 1 : 1;
            setIpos([...ipos, { ...newIpo, id: newId }]);
        }

        setNewIpo({ 
            company: "", 
            price: "", 
            open: "", 
            close: "", 
            size: "", 
            type: "", 
            listing: "", 
            status: "Ongoing", 
            logo: "" 
        });
        setShowForm(false);
        setEditingId(null);
    };

    const handleEditIpo = (ipo) => {
        setNewIpo(ipo);
        setEditingId(ipo.id);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setIpos(ipos.filter(ipo => ipo.id !== id));
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Upcoming IPO | Dashboard</h2>
                <button 
                    onClick={() => { setShowForm(!showForm); setEditingId(null); }} 
                    className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-200 cursor-pointer"
                >
                    {showForm ? "Close Form" : "Register IPO"}
                </button>
            </div>

            {showForm ? (
                <div className="bg-white p-4 shadow-md rounded-lg mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="company" value={newIpo.company} onChange={handleInputChange} placeholder="Company Name" className="border p-2 rounded" />
                        <input type="text" name="price" value={newIpo.price} onChange={handleInputChange} placeholder="Price Band" className="border p-2 rounded" />
                        <input type="date" name="open" value={newIpo.open} onChange={handleInputChange} placeholder="Open Date" className="border p-2 rounded" />
                        <input type="date" name="close" value={newIpo.close} onChange={handleInputChange} placeholder="Close Date" className="border p-2 rounded" />
                        <input type="text" name="size" value={newIpo.size} onChange={handleInputChange} placeholder="Issue Size" className="border p-2 rounded" />
                        <input type="text" name="type" value={newIpo.type} onChange={handleInputChange} placeholder="Issue Type" className="border p-2 rounded" />
                        <input type="date" name="listing" value={newIpo.listing} onChange={handleInputChange} placeholder="Listing Date" className="border p-2 rounded" />
                        <select name="status" value={newIpo.status} onChange={handleInputChange} className="border p-2 rounded">
                            <option value="Ongoing">Ongoing</option>
                            <option value="Coming">Coming</option>
                            <option value="New Listed">New Listed</option>
                        </select>
                    </div>
                    
                    <div className="mt-4">
                        <input type="file" accept="image/*" onChange={handleLogoUpload} className="mb-2" />
                        {newIpo.logo && <img src={newIpo.logo} alt="Logo Preview" className="w-20 h-20 object-contain mb-2" />}
                    </div>

                    <button 
                        onClick={handleAddOrUpdateIpo} 
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                    >
                        {editingId ? "Update IPO" : "Add IPO"}
                    </button>
                </div>
            ) : (
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700 text-left">
                                <th className="px-4 py-3">Logo</th>
                                <th className="px-4 py-3">Company</th>
                                <th className="px-4 py-3">Price Band</th>
                                <th className="px-4 py-3">Open</th>
                                <th className="px-4 py-3">Close</th>
                                <th className="px-4 py-3">Issue Size</th>
                                <th className="px-4 py-3">Issue Type</th>
                                <th className="px-4 py-3">Listing Date</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ipos.map((ipo) => (
                                <tr key={ipo.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        {ipo.logo && <img src={ipo.logo} alt="Logo" className="w-10 h-10 object-contain" />}
                                    </td>
                                    <td className="px-4 py-3">{ipo.company}</td>
                                    <td className="px-4 py-3">{ipo.price}</td>
                                    <td className="px-4 py-3">{ipo.open}</td>
                                    <td className="px-4 py-3">{ipo.close}</td>
                                    <td className="px-4 py-3">{ipo.size}</td>
                                    <td className="px-4 py-3">{ipo.type}</td>
                                    <td className="px-4 py-3">{ipo.listing}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 rounded-full text-sm ${
                                            ipo.status === "Ongoing" ? "bg-yellow-100 text-yellow-800" :
                                            ipo.status === "Coming" ? "bg-blue-100 text-blue-800" :
                                            "bg-green-100 text-green-800"
                                        }`}>
                                            {ipo.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 flex space-x-2">
                                        <button 
                                            onClick={() => handleEditIpo(ipo)} 
                                            className="text-green-500 hover:text-green-700"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(ipo.id)} 
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}