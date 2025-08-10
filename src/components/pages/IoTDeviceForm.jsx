import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';
axios.get('http://localhost:3000/api/devices')

const IoTDeviceForm = () => {
  const [formData, setFormData] = useState({
    deviceName: '',
    deviceId: '',
    deviceType: '',
    location: '',
    installDate: '',
    status: '',
  });

  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      deviceName: '',
      deviceId: '',
      deviceType: '',
      location: '',
      installDate: '',
      status: '',
    });
    setSelectedDevice(null);
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing && selectedDevice) {
        await axios.put(`${API_BASE_URL}/update-iot-device/${selectedDevice._id}`, formData);
        alert('Device updated successfully!');
      } else {
        await axios.post(`${API_BASE_URL}/add-iot-device`, formData);
        alert('Device registered successfully!');
      }
      fetchDevices();
      resetForm();
    } catch (error) {
      console.error(error);
      alert('Operation failed!');
    }
  };

  const fetchDevices = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/get-iot-devices`);
      setDevices(res.data.iotDevices || []);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteDevice = async (id) => {
    if (window.confirm('Are you sure you want to delete this device?')) {
      try {
        await axios.delete(`${API_BASE_URL}/delete-iot-device/${id}`);
        alert('Device deleted!');
        fetchDevices();
      } catch (err) {
        console.error(err);
        alert('Deletion failed!');
      }
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🔌 IoT Device {isEditing ? 'Edit' : 'Registration'} Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {[{ label: 'Device Name', name: 'deviceName', placeholder: 'e.g. Motion Sensor' },
          { label: 'Device ID', name: 'deviceId', placeholder: 'e.g. DEV12345' },
          { label: 'Location', name: 'location', placeholder: 'e.g. Main Entrance' }]
          .map((field) => (
            <div style={styles.group} key={field.name}>
              <label style={styles.label}>{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                style={styles.input}
                required
              />
            </div>
        ))}

        <div style={styles.group}>
          <label style={styles.label}>Device Type</label>
          <select name="deviceType" value={formData.deviceType} onChange={handleChange} style={styles.input} required>
            <option value="">Select Type</option>
            <option value="Sensor">Sensor</option>
            <option value="Actuator">Actuator</option>
            <option value="Controller">Controller</option>
            <option value="Camera">Camera</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Installation Date</label>
          <input
            type="date"
            name="installDate"
            value={formData.installDate}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Status</label>
          <select name="status" value={formData.status} onChange={handleChange} style={styles.input} required>
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>
          {isEditing ? 'Update Device' : 'Register Device'}
        </button>
      </form>

      <hr style={{ margin: '40px 0' }} />

      <h3 style={styles.heading}>📡 All Registered IoT Devices</h3>
      <div style={styles.cardContainer}>
        {devices.map((device) => (
          <div key={device._id} style={styles.card}>
            <h4 style={styles.cardTitle}>{device.deviceName}</h4>
            <p><strong>ID:</strong> {device.deviceId}</p>
            <p><strong>Type:</strong> {device.deviceType}</p>
            <p><strong>Status:</strong> {device.status}</p>
            <button onClick={() => setSelectedDevice(device)} style={styles.viewBtn}>View</button>
            <button
              onClick={() => {
                setSelectedDevice(device);
                setFormData({
                  deviceName: device.deviceName,
                  deviceId: device.deviceId,
                  deviceType: device.deviceType,
                  location: device.location,
                  installDate: device.installDate?.substring(0, 10),
                  status: device.status,
                });
                setIsEditing(true);
              }}
              style={{ ...styles.viewBtn, backgroundColor: '#facc15' }}
            >
              Edit
            </button>
            <button onClick={() => deleteDevice(device._id)} style={{ ...styles.viewBtn, backgroundColor: '#ef4444' }}>
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedDevice && !isEditing && (
        <div style={styles.modalOverlay} onClick={() => setSelectedDevice(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>📋 Device Details</h2>
            <p><strong>Name:</strong> {selectedDevice.deviceName}</p>
            <p><strong>ID:</strong> {selectedDevice.deviceId}</p>
            <p><strong>Type:</strong> {selectedDevice.deviceType}</p>
            <p><strong>Location:</strong> {selectedDevice.location}</p>
            <p><strong>Install Date:</strong> {selectedDevice.installDate}</p>
            <p><strong>Status:</strong> {selectedDevice.status}</p>
            <button onClick={() => setSelectedDevice(null)} style={styles.closeBtn}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: '20px',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '6px',
    color: '#0f172a',
  },
  input: {
    padding: '10px',
    fontSize: '15px',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    outlineColor: '#3b82f6',
  },
  button: {
    padding: '12px',
    backgroundColor: '#0ea5e9',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  viewBtn: {
    marginTop: '10px',
    marginRight: '5px',
    padding: '8px 12px',
    backgroundColor: '#6366f1',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
    borderLeft: '5px solid #0ea5e9',
  },
  cardTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#0f172a',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '500px',
    textAlign: 'left',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  },
  closeBtn: {
    marginTop: '20px',
    backgroundColor: '#ef4444',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default IoTDeviceForm;
