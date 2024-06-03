<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccessCoursesToUser extends Model
{
    use HasFactory;
    protected $fillable = [
        'course_id',
        'user_id',
    ];

    public function Users()
    {
        return $this->belongsTo(User::class);
    }

    public function courses()
    {
        return $this->belongsTo(Course::class);
    }

}
