import { Component } from '@angular/core';
import { Appointment } from '../model/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrls: ['./appointment-list.css'],
})
export class AppointmentList implements OnInit {

  newAppointmentTitle:string = '';
  newAppointmentDate:Date = new Date();

  appointments :Appointment[] = [];

  ngOnInit() {
    const storedAppointments = localStorage.getItem('appointments'); 
    this.appointments = storedAppointments ? JSON.parse(storedAppointments) :[];    
  } 

  addAppointment() {
    
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate) { 
      const newAppointment: Appointment = {
        id: this.appointments.length + 1,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      };

      this.appointments.push(newAppointment);
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
      console.log(this.appointments);
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
      alert(this.appointments.length+' Appointment added successfully!');
    }else{
      alert('Please enter valid appointment details.');
    }


  }

  deleteAppointment(appointmentId: number) {
    //this.appointments = this.appointments.filter(appointment => appointment.id !== appointmentId);
    this.appointments.splice(appointmentId-1, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
    alert('Appointment deleted successfully!');
  }

}

